import { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState(['Mango', 'Banana', 'Apple']);
  const [newFruit, setNewFruit] = useState('');

  function addFruit() {
    if (newFruit === '') return;
    setFruits([...fruits, newFruit]);
    setNewFruit('');
  }

  return (
    <div>
      <h2>Fruit List</h2>

      <input
        type="text"
        placeholder="Add a fruit..."
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addFruit}>Add</button>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <FruitList />
    </div>
  );
}

export default App;