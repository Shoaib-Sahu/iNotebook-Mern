import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true, "Please Enter The Title"]
    },
    description: {
        type: String,
        required: [true, "Please Enter The Description"],
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const NotesModel = mongoose.model('Note', notesSchema);
export default NotesModel;