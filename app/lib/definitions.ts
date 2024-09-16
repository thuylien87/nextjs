export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  is_active: boolean;
};

export type Authors = {
  id: string;
  full_name: string;
  email: string;
  image_url: string;
};

export type Books = {
  id: string;
  title: string;
  author_id: string;
  description: string;
  rating: number;
  image_url: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestBook = {
  id: string;
  author_id: string;
  title: string;  
  image_url: string;
  rating: number; 
};

// // The database returns a number for amount, but we later format it to a string with the formatCurrency function
// export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
//   amount: number;
// };

export type BooksTable = {
  id: string;
  author_id: string;
  title: string;  
  image_url: string;
  rating: number;  
};

export type AuthorsTableType = {
  id: string;
  full_name: string;
  email: string;
  image_url: string;
};

export type FormattedAuthorsTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;  
};

export type AuthorField = {
  id: string;
  full_name: string;
};

export type BookForm = {
  id: string;
  title: string;
  description: string;
  author_id: string;
  rating: number;  
};
