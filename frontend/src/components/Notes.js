import React, { useEffect } from 'react'
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../actions/NotesAction';

const Notes = () => {
    const dispatch = useDispatch();
    const { notes } = useSelector((state) => state.noteReducer);
    const { user } = useSelector((state) => state.authReducer.authData);

    // Fetching user's notes
    useEffect(() => {
        dispatch(fetchNotes(user._id));
    }, []);

    return (
        <>
            <AddNote />
            <div className="row my-4">
                <h2>Your Notes</h2>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem
                        key={note._id}
                        note={note} />
                })}
            </div>
        </>
    )
}

export default Notes