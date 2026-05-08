import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
  const { darkMode } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [time, setTime] = useState(new Date());

  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pageStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f0f0',
    minHeight: '100vh',
    padding: '40px',
    color: darkMode ? 'white' : 'black'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '30px'
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#282c34' : 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const linkButtonStyle = {
    display: 'inline-block',
    marginTop: '15px',
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px'
  };

  const pendingTasks = tasks.filter(t => !t.done).length;
  const doneTasks = tasks.filter(t => t.done).length;

  return (
    <div style={pageStyle}>

      {/* Header */}
      <div>
        <h1>Good {time.getHours() < 12 ? 'Morning' : time.getHours() < 18 ? 'Afternoon' : 'Evening'}, Rodgers! 👋</h1>
        <p style={{ fontSize: '18px', marginTop: '5px', opacity: 0.7 }}>
          {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          {' — '}
          {time.toLocaleTimeString()}
        </p>
      </div>

      {/* Grid */}
      <div style={gridStyle}>

        {/* Tasks Card */}
        <div style={cardStyle}>
          <h2>📝 Tasks</h2>
          <div style={{ marginTop: '15px' }}>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50' }}>
              {pendingTasks}
            </p>
            <p>tasks remaining</p>
            <p style={{ marginTop: '8px', opacity: 0.7 }}>{doneTasks} completed</p>
          </div>
          <Link to="/tasks" style={linkButtonStyle}>Go to Tasks →</Link>
        </div>

        {/* Weather Card */}
        <div style={cardStyle}>
          <h2>🌤️ Weather</h2>
          <p style={{ marginTop: '15px', opacity: 0.7 }}>
            Check today's weather forecast for your city
          </p>
          <Link to="/weather" style={linkButtonStyle}>Check Weather →</Link>
        </div>

        {/* Posts Card */}
        <div style={cardStyle}>
          <h2>📰 Latest Posts</h2>
          <p style={{ marginTop: '15px', opacity: 0.7 }}>
            Read the latest posts and updates from around the web
          </p>
          <Link to="/posts" style={linkButtonStyle}>Read Posts →</Link>
        </div>

        {/* Quick Stats Card */}
        <div style={cardStyle}>
          <h2>📊 Quick Stats</h2>
          <div style={{ marginTop: '15px' }}>
            <p>✅ Tasks Done: <strong>{doneTasks}</strong></p>
            <p style={{ marginTop: '8px' }}>⏳ Tasks Pending: <strong>{pendingTasks}</strong></p>
            <p style={{ marginTop: '8px' }}>📅 Day: <strong>{time.toLocaleDateString('en-US', { weekday: 'long' })}</strong></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;