import express from "express";
import connectDB from "./config/db.js";
import "dotenv/config";
import cors from "cors";
import bookModel from "./model/book.js";
import bookRouter from "./routes/bookRoutes.js";

const app = express();

const PORT = process.env.PORT || 3500;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
await connectDB();

// Book API

app.use("/api/book", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} via http://localhost:${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
