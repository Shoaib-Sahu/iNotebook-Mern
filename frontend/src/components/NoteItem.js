import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../actions/NotesAction';
import EditModal from './EditModal';

const Noteitem = ({ note }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const dispatch = useDispatch();

    // To delete a note
    const handleDelete = () => {
        dispatch(deleteNote(note._id));
    };

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">{note.title}</h4>

                        <i className="far fa-trash-alt mx-2"
                            style={{ cursor: "pointer" }}
                            onClick={handleDelete}>
                        </i>
                        <i className="far fa-edit mx-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => setModalOpened(true)}>
                        </i>
                        <EditModal
                            modalOpened={modalOpened}
                            setModalOpened={setModalOpened}
                            data={note}
                        />
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem