import authorModel from "../model/author.js";
import mongoose from "mongoose";

export const createAuthor = async (req, res) => {
  const { name, country } = req.body;
  try {
    const newAuthor = new authorModel({ name, country });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAuthors = async (req, res) => {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
