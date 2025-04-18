import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
const authorModel = mongoose.models.Author || mongoose.model("Author", authorSchema);
export default authorModel;
