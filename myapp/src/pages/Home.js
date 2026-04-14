import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { darkMode } = useTheme();

  const pageStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f0f0',
    color: darkMode ? 'white' : 'black',
    minHeight: '100vh',
    padding: '60px 40px',
    textAlign: 'center'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={pageStyle}>
      <h1>Welcome to Task Manager 📝</h1>
      <p style={{ marginTop: '10px', fontSize: '18px' }}>
        Stay organized, get things done!
      </p>
      <Link to="/tasks">
        <button style={buttonStyle}>Go to My Tasks →</button>
      </Link>
    </div>
  );
}

export default Home;