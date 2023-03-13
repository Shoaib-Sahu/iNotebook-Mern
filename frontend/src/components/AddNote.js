import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../actions/NotesAction';

const AddNote = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);

    const initialState = {
        title: "",
        description: "",
        tag: "",
        userId: user._id
    };
    const [note, setNote] = useState(initialState);

    // To handle changes in inputs
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    // To add note
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote(note));
    };

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={note.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={note.description}
                        onChange={handleChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tag"
                        value={note.tag}
                        onChange={handleChange}
                    />
                </div>

                <button
                    disabled={note.description.length < 5}
                    type="submit"
                    className="btn btn-dark"
                >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote