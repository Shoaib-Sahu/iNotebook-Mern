import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchNotes = (id) => API.get(`/notes/${id}`);

export const addNote = (note) => API.post(`/notes/addnote`, note);

export const updateNote = (id, note) => API.put(`/notes/updatenote/${id}`, note);

export const deleteNote = (id) => API.delete(`/notes/deletenote/${id}`);