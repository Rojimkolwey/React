import { useTheme } from '../context/ThemeContext';

function Home() {
  const { darkMode } = useTheme();

  const pageStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f0f0',
    color: darkMode ? 'white' : 'black',
    minHeight: '100vh',
    padding: '40px'
  };

  return (
    <div style={pageStyle}>
      <h1>Home Page</h1>
      <p>Welcome to my React app!</p>
      <p>Dark mode is {darkMode ? 'ON 🌙' : 'OFF ☀️'}</p>
    </div>
  );
}

export default Home;