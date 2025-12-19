// backend/models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  problem: String,
  language: String,
  code: String,
  algorithm: String,
  topic: String,
  isFavourite: Boolean,
  difficulty: String,
  timeComplexity: String,
  spaceComplexity: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Note", noteSchema);
