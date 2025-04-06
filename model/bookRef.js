import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
    genre: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const bookModel = mongoose.model.Book || mongoose.model("Book", BookSchema);
export default bookModel;
