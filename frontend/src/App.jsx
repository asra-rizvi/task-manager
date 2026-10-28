import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/api/tasks`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_URL}/api/tasks`, { title, description })
      .then((res) => {
        setTasks((prevTasks) => [res.data, ...prevTasks]);
        setTitle('');
        setDescription('');
      })
      .catch((err) => console.error(err));
  };

  const handleToggle = (id, completed) => {
    axios.put(`${API_URL}/api/tasks/${id}`, { completed: !completed })
      .then((res) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === id ? res.data : task))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/api/tasks/${id}`)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="page">
      <div className="app">
        <h1 className="app-title">Task Manager</h1>

        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-input"
          />
          <button type="submit" className="add-button">Add Task</button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task._id, task.completed)}
              />
              <span className={task.completed ? 'task-text done' : 'task-text'}>
                {task.title}
              </span>
              <button onClick={() => handleDelete(task._id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
