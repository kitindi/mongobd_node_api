import express from "express";
import { createbook } from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.post("/create-book/", createbook);

export default bookRouter;
