import React from 'react';
import axios from 'axios'; 
import TaskCard from './TaskCard';
import 'D:/KEERTHANA MAM/PROJECT MANAGEMENT SYSTEM/frontend/src/App.css';

const Dashboard = ({ tasks, setTasks }) => {
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(`http://localhost:5000/tasks/${id}`, {
        status: newStatus,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, status: response.data.status } : task
        )
      );
    } catch (err) {
      console.error('Error updating task status:', err.message);
    }
  };

  //Deletion of Tasks - Trash Icons
  const deleteTask = async (id) => {
    try {
      console.log(`Deleting Task: ${id}`);
      const response = await axios.delete(`http://localhost:5000/tasks/${id}`);
      console.log('Delete response:', response.data);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err.response?.data?.message || err.message);
    }
  };
  
  
  
  

  const categorizedTasks = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="dashboard">
      {['Pending', 'InProgress', 'Completed'].map((status) => (
        <div key={status} className="status-column">
          <h2>{status}</h2>
          {categorizedTasks(status).map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              updateStatus={updateStatus}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
