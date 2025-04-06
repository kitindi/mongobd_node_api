import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      name: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
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
const bookModel = mongoose.model("Book", BookSchema);
export default bookModel;
