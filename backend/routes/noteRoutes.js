// backend/routes/noteRoutes.js
import express from "express";
import Note from "../models/Note.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new note
router.post("/", authMiddleware, async (req, res) => {
  const {
    title,
    problem,
    difficulty,
    language,
    algorithm,
    code,
    timeComplexity,
    spaceComplexity,
    isFavourite = false,
  } = req.body;

  if (
    !title ||
    !problem ||
    !difficulty ||
    !language ||
    !algorithm ||
    !code ||
    !timeComplexity ||
    !spaceComplexity
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const note = await Note.create({
      title,
      problem,
      difficulty,
      language,
      algorithm,
      code,
      timeComplexity,
      spaceComplexity,
      isFavourite,
      user: req.user,
    });

    res.status(201).json({ note });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all notes for a logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });
    res.status(200).json({ notes });
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a note by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    if (!note) {
      return res
        .status(404)
        .json({ message: "Note not found or unauthorized" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("Error deleting note:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a note by ID
router.put("/:id", authMiddleware, async (req, res) => {
  const {
    title,
    problem,
    language,
    code,
    algorithm,
    timeComplexity,
    spaceComplexity,
  } = req.body;

  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { title, problem, algorithm, code, timeComplexity, spaceComplexity },
      { new: true, runValidators: true }
    );

    if (!note) {
      return res
        .status(404)
        .json({ message: "Note not found or unauthorized" });
    }

    res.status(200).json({ message: "Note updated successfully", note });
  } catch (err) {
    console.error("Error updating note:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
