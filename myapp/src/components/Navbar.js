import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
<Link to="/weather" style={linkStyle}>🌤️ Weather</Link>

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const navStyle = {
    backgroundColor: darkMode ? '#282c34' : '#ffffff',
    color: darkMode ? 'white' : 'black',
    padding: '15px 20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: darkMode ? 'white' : '#282c34',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>🏠 Home</Link>
      <Link to="/tasks" style={linkStyle}>📝 Tasks</Link>
      <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;