import * as notesApi from '../api/NotesRequest';

export const fetchNotes = (id) => async (dispatch) => {
    const { data } = await notesApi.fetchNotes(id);
    dispatch({ type: "FETCH_NOTE", data: data });
};

export const addNote = (note) => async (dispatch) => {
    const { data } = await notesApi.addNote(note);
    dispatch({ type: "ADD_NOTE", data: data });
};

export const updateNote = (id, note) => async (dispatch) => {
    const { data } = await notesApi.updateNote(id, note);
    dispatch({ type: "UPDATE_NOTE", data: data.note });
};

export const deleteNote = (id) => async (dispatch) => {
    await notesApi.deleteNote(id);
    dispatch({ type: "DELETE_NOTE", data: id });
};