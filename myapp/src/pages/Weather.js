import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Weather() {
  const { darkMode } = useTheme();
  const [city, setCity] = useState('Nairobi');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_API_KEY_HERE'; // paste your key here

  function fetchWeather() {
    setLoading(true);
    setError('');

    fetch(
      `ac1f0b4a862bb4414fc8934feb495b4b.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
    )
      .then((res) => {
        if (!res.ok) throw new Error('City not found');
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  // Fetch weather when page first loads
  useEffect(() => {
    fetchWeather();
  }, []);

  const pageStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f0f0',
    minHeight: '100vh',
    padding: '40px',
    color: darkMode ? 'white' : 'black'
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#282c34' : 'white',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '400px',
    marginTop: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '200px'
  };

  return (
    <div style={pageStyle}>
      <h1>🌤️ Weather App</h1>

      <div style={{ marginTop: '20px' }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {loading && <p style={{ marginTop: '20px' }}>Loading...</p>}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {weather && !loading && (
        <div style={cardStyle}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p style={{ fontSize: '48px', margin: '10px 0' }}>
            {Math.round(weather.main.temp)}°C
          </p>
          <p style={{ textTransform: 'capitalize' }}>
            {weather.weather[0].description}
          </p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;