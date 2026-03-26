import { useState } from 'react';

const fruits = ['Mango', 'Banana', 'Apple', 'Pineapple', 'Orange'];

function FruitList() {
  return (
    <div>
      <h2>Fruit List</h2>
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