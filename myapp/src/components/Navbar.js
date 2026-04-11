import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const navStyle = {
    backgroundColor: darkMode ? '#282c34' : '#ffffff',
    color: darkMode ? 'white' : 'black',
    padding: '15px 20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: darkMode ? 'white' : 'black' }}>Home</Link>
      <Link to="/about" style={{ color: darkMode ? 'white' : 'black' }}>About</Link>
      <Link to="/contact" style={{ color: darkMode ? 'white' : 'black' }}>Contact</Link>
      <button onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;