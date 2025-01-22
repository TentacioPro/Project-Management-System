import React, { useState } from 'react';
import axios from 'axios';


const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/tasks', {
        title,
        description,
      });
      onTaskAdded(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
        type="text"
        className='task-form__input'
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
      className='task-form__textarea'
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className='task-form__button'>Add Task</button>
    </form>
  );
};

export default TaskForm;
