import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Dashboard';
import { FaTrash } from 'react-icons/fa'; 

const TaskCard = ({ task, updateStatus, deleteTask }) => {
    return (
      <div className="task-card">
        <div className="task-details">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-description">{task.description}</p>
        </div>
        <div className="task-actions">
          <select
            className="task-status-dropdown"
            value={task.status}
            onChange={(e) => updateStatus(task._id, e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="InProgress">InProgress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            className="delete-task-btn"
            onClick={() => deleteTask(task._id)}
            title="Delete Task"
          >
            <FaTrash 
                    className="task-card__delete-icon" 
                    onClick={() => deleteTask(task._id)}
            />
          </button>
        </div>
      </div>
    );
  };

export default TaskCard;



// {/* Delete icon */}
//<button
//className="delete-button"
//onClick={() => deleteTask(task._id)}
//>
//  <i className="fa fa-trash"></i> {/* Trash Icon */}
// </button>
