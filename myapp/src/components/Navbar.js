import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const navStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#ffffff',
    padding: '15px 30px',
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  };

  const linkStyle = {
    color: darkMode ? 'white' : '#282c34',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '15px'
  };

  const buttonStyle = {
    marginLeft: 'auto',
    padding: '8px 16px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#ffffff' : '#282c34',
    color: darkMode ? '#282c34' : 'white',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <span style={{ fontWeight: 'bold', fontSize: '18px', color: darkMode ? 'white' : '#282c34' }}>
        📊 Dashboard
      </span>
      <Link to="/" style={linkStyle}>🏠 Home</Link>
      <Link to="/tasks" style={linkStyle}>📝 Tasks</Link>
      <Link to="/weather" style={linkStyle}>🌤️ Weather</Link>
      <Link to="/posts" style={linkStyle}>📰 Posts</Link>
      <button onClick={toggleTheme} style={buttonStyle}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}

export default Navbar;