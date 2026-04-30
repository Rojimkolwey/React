import useFetch from '../hooks/useFetch';
import { useTheme } from '../context/ThemeContext';

function Posts() {
  const { darkMode } = useTheme();
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  const pageStyle = {
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f0f0',
    minHeight: '100vh',
    padding: '40px',
    color: darkMode ? 'white' : 'black'
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#282c34' : 'white',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={pageStyle}>
      <h1>📰 Latest Posts</h1>

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {posts && posts.map((post) => (
        <div key={post.id} style={cardStyle}>
          <h3>{post.title}</h3>
          <p style={{ marginTop: '8px', color: darkMode ? '#aaa' : '#666' }}>
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Posts;