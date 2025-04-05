import mongoose from "mongoose";
import Book from "../models/bookModel.js";

// Create a new book
export const createBook = async (req, res) => {
  try {
    const { title, author, genre, publishedDate, summary } = req.body;
    const newBook = new Book({
      title,
      author,
      genre,
      publishedDate,
      summary,
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a book by ID

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update a book by ID

export const updateBook = async (req, res) => {
  const { title, author, genre, publishedDate, summary } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, genre, publishedDate, summary }, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Search for books by title or author

const searchBooks = async (req, res) => {
  const { title, author } = req.query;
  const query = {};
  if (title) {
    query.title = { $regex: title, $options: "i" };
  }
  if (author) {
    query.author = { $regex: author, $options: "i" };
  }
  try {
    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Export all functions
export default {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks,
};
