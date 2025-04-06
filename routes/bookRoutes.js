import express from "express";
import { createbook, getBook } from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.post("/create-book/", createbook);
bookRouter.get("/get-all-books/", getBook);

export default bookRouter;
