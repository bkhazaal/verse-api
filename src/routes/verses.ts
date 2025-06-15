import express from "express";
import {
  createVerse,
  deleteVerse,
  getAllVerses,
  getVerseById,
  updateVerse,
} from "../controllers/verseController";

// Create a new router for verses
const router = express.Router();

// Define routes for verses
router.get("/", getAllVerses);
router.get("/:id", getVerseById);
router.post("/", createVerse);
router.put("/:id", updateVerse);
router.delete("/:id", deleteVerse);

export default router;
