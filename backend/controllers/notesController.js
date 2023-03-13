import notesModel from '../models/NotesModel.js';

// Add a note
export const addNote = async (req, res) => {
    try {
        const note = await notesModel.create(req.body);
        res.status(201).json(note);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch user notes
export const fetchNotes = async (req, res) => {
    const userId = req.params.id;
    try {
        const note = await notesModel.find({ userId: userId });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        };
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a note
export const updateNote = async (req, res) => {
    const noteId = req.params.id;
    const { userId } = req.body;
    try {
        let note = await notesModel.findById(noteId);
        // Checking if the user is only updating his/her own note
        if (note.userId === userId) {
            note = await notesModel.findByIdAndUpdate(noteId,
                req.body,
                { new: true }
            );
            res.status(200).json({ message: "Note updated successfully", note });
        }
        else {
            res.status(403).json({ error: "Action Forbidden" });
        };
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a note
export const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        let note = await notesModel.findById(id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        };
        await note.deleteOne();
        res.status(200).json({ message: "Note deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};