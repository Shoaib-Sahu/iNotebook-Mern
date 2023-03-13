import express from 'express';
import {
    fetchNotes,
    addNote,
    updateNote,
    deleteNote
} from '../controllers/notesController.js';
const router = express.Router();

router.get("/:id", fetchNotes);
router.post("/addnote", addNote);
router.put("/updatenote/:id", updateNote);
router.delete("/deletenote/:id", deleteNote);

export default router