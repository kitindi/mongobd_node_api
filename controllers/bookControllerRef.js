import mongoose from "mongoose";
import bookModel from "../model/book.js";
// import bookModel from "../model/bookRef.js";

// Create a new bookModel
export const createbook = async (req, res) => {
  try {
    const { title, author, genre, publishedDate, summary } = req.body;
    const newBook = new bookModel({
      title,
      author,
      genre,
      publishedDate,
      summary,
    });
    const savedbook = await newBook.save();
    res.status(201).json(savedbook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get all bookModels
export const getBook = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a bookModel by ID

export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "bookModel not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update a bookModel by ID

export const updateBook = async (req, res) => {
  const { title, author, genre, publishedDate, summary } = req.body;
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, { title, author, genre, publishedDate, summary }, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a bookModel by ID
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Search for bookModels by title or author

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
    const books = await bookModel.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Export all functions
export default {
  createbook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks,
};
