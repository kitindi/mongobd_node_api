import connectDB from "./config/db.js";
import bookModel from "./model/book.js";

// connect to MongoDB
await connectDB();

// create a new book

// const createBook = async () => {
//   const book = new bookModel({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Fiction",
//     publishedDate: new Date("1925-04-10"),
//     summary: "A novel about the American dream and the disillusionment that comes with it.",
//   });
//   const savedBook = await book.save();
//   console.log("Book created:", savedBook);
// };

// await createBook();

// get all the boooks

const getBooks = async () => {
  const books = await bookModel.find();
  console.log("Books:", books);
};

await getBooks();
