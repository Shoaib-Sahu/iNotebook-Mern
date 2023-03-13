import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../actions/NotesAction';

function EditModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);

  // To handle changes in inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission
  const handlUpdate = (e) => {
    e.preventDefault();
    dispatch(updateNote(formData._id, formData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlaycolor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]}
      overlayopacity={0.55}
      overlayblur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="container my-3" onSubmit={handlUpdate}>
        <h3 className='my-3'>Your Note</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
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
            value={formData.description}
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
            value={formData.tag}
            onChange={handleChange}
          />
        </div>

        <button disabled={formData.description.length < 5}
          type="submit"
          className="btn btn-dark">Update</button>
      </form>
    </Modal>
  );
}

export default EditModal;