// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextjsmail.com',
    password: '123456',
    is_active: '1',
  },
];

const authors = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    full_name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
];

const books = [
  {
    id: '01234567-89ab-cdef-0123-456789abcdef',
    title: 'The Lord of the Rings',
    author_id: authors[0].id,
    description: 'Experience lightning-fast speeds, stunning visuals, and a long-lasting battery in this sleek and powerful smartphone. With its advanced camera system and intuitive interface, capture unforgettable moments and stay connected with ease',
    rating: '5',
    image_url: '',
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Game of Thrones',
    author_id: authors[1].id,
    description: 'A bustling metropolis with towering skyscrapers, neon lights, and a vibrant cultural scene. The city is alive with energy and opportunity, but it also hides a dark underbelly of crime and corruption',
    rating: '5',
    image_url: '',
  },
  {
    id: '01234567-89ab-cdef-0123-456789abcde0',
    title: 'The Murder in the Orient Express',
    author_id: authors[4].id, 
    description: 'A thrilling mystery set in a haunted mansion, where a detective must unravel a century-old secret before it\'s too late. Filled with suspenseful twists and turns, this gripping novel will keep you guessing until the very end',   
    rating: '4',
    image_url: '',
  },
  {
    id: 'e4567890-ab12-cdef-0123-456789abcdef',
    title: 'Gone Girl',
    author_id: authors[3].id,
    description: 'Experience lightning-fast speeds, stunning visuals, and a long-lasting battery in this sleek and powerful smartphone. With its advanced camera system and intuitive interface, capture unforgettable moments and stay connected with ease',  
    rating: '4',
    image_url: '',
  },
  {
    id: 'd3456789-ab12-cdef-0123-456789abcdef',
    title: 'And Then There Were None',
    author_id: authors[5].id,
    description: 'A peaceful countryside with rolling hills, lush forests, and a quaint village nestled among the trees. The setting offers a sense of tranquility and escape from the hustle and bustle of city life', 
    rating: '5',
    image_url: '',
  },
  {
    id: 'c1234567-89ab-cdef-0123-456789abcdef',
    title: 'Pride and Prejudice',
    author_id: authors[2].id, 
    description: 'A bustling metropolis with towering skyscrapers, neon lights, and a vibrant cultural scene. The city is alive with energy and opportunity, but it also hides a dark underbelly of crime and corruption',   
    rating: '5',
    image_url: '',
  },
  {
    id: 'b0765432-10fe-dcba-9876-543210fedcba',
    title: 'The Notebook',
    author_id: authors[0].id,
    description: 'A peaceful countryside with rolling hills, lush forests, and a quaint village nestled among the trees. The setting offers a sense of tranquility and escape from the hustle and bustle of city life', 
    rating: '5',
    image_url: '',
  },
  {
    id: 'a8098c1a-f86d-11e4-8c21-0800200c9a66',
    title: 'Call Me by Your Name',
    author_id: authors[3].id,
    description: 'A bustling metropolis with towering skyscrapers, neon lights, and a vibrant cultural scene. The city is alive with energy and opportunity, but it also hides a dark underbelly of crime and corruption.',  
    rating: '4',
    image_url: '',
  },
  {
    id: 'abcdef01-2345-6789-abcdef-0123456789',
    title: 'Dracula',
    author_id: authors[4].id,
    description: 'A cunning and manipulative villain with a thirst for power and control. He will stop at nothing to achieve his goals, and his schemes pose a formidable threat to the heroes.',  
    rating: '4',
    image_url: '',
  },
  {
    id: '98765432-10fe-dcba-9876-543210fedcba',
    title: 'The Shining',
    author_id: authors[5].id,
    description: 'A determined and resourceful young woman with a sharp wit and a knack for problem-solving. Despite facing numerous challenges, she remains optimistic and always finds a way to overcome adversity.',  
    rating: '4',
    image_url: '',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, authors, books, revenue };
