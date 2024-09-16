import { sql } from '@vercel/postgres';
import {
  AuthorField,  
  AuthorsTableType,
  BookForm,  
  BooksTable,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

// export async function fetchLatestbooks() {
//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT book.amount, customers.name, customers.image_url, customers.email, book.id
//       FROM books
//       JOIN customers ON book.customer_id = customers.id
//       ORDER BY book.date DESC
//       LIMIT 5`;

//     const latestbooks = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestbooks;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest book.');
//   }
// }

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM books`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const bookstatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM books`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      bookstatusPromise,
    ]);

    const numberOfbooks = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidbooks = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingbooks = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfbooks,
      totalPaidbooks,
      totalPendingbooks,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredBooks(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const books = await sql<booksTable>`
      SELECT
        book.id,
        book.amount,
        book.date,
        book.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM books
      JOIN customers ON book.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        book.amount::text ILIKE ${`%${query}%`} OR
        book.date::text ILIKE ${`%${query}%`} OR
        book.status ILIKE ${`%${query}%`}
      ORDER BY book.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return books.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch book.');
  }
}

export async function fetchBooksPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM books
    JOIN customers ON book.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      book.amount::text ILIKE ${`%${query}%`} OR
      book.date::text ILIKE ${`%${query}%`} OR
      book.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of book.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        book.id,
        book.customer_id,
        book.amount,
        book.status
      FROM books
      WHERE book.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(book.id) AS total_books,
		  SUM(CASE WHEN book.status = 'pending' THEN book.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN book.status = 'paid' THEN book.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN books ON customers.id = book.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
