import { useState } from 'react';

function slowCalculation(num) {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {} // slow on purpose
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = slowCalculation(number);

  return (
    <div style={{ padding: '40px' }}>
      <h2>Result: {result}</h2>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;