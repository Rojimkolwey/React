import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Tasks() {
  const { darkMode } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage when page loads
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const pageStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f0f0',
    minHeight: '100vh',
    padding: '40px',
    color: darkMode ? 'white' : 'black'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginRight: '10px'
  };

  const taskStyle = (done) => ({
    backgroundColor: darkMode ? '#282c34' : 'white',
    color: darkMode ? 'white' : 'black',
    padding: '15px',
    marginTop: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: done ? 'line-through' : 'none',
    opacity: done ? 0.6 : 1
  });

  return (
    <div style={pageStyle}>
      <h1>My Tasks 📝</h1>
      <p>{tasks.filter(t => !t.done).length} tasks remaining</p>

      <div style={{ marginTop: '20px' }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {tasks.length === 0 && <p>No tasks yet — add one above!</p>}
        {tasks.map(task => (
          <div key={task.id} style={taskStyle(task.done)}>
            <span>{task.text}</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => toggleTask(task.id)}>
                {task.done ? '↩️ Undo' : '✅ Done'}
              </button>
              <button onClick={() => deleteTask(task.id)}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;