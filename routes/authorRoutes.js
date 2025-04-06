import express from "express";
const authorRouter = express.Router();
import { createAuthor, getAuthors } from "../controllers/authorController.js";

// Create a new author
authorRouter.post("/create-author/", createAuthor);
// Get all authors
authorRouter.get("/get-all-authors/", getAuthors);

export default authorRouter;
