import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {submitted && <h3>Hello, {name}!</h3>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;