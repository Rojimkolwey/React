function Header() {
  return (
    <div>
      <h1>My React App</h1>
      <p>Welcome to my first React site</p>
    </div>
  );
}

function Card() {
  return (
    <div>
      <h2>I am a Card</h2>
      <p>This is a reusable component</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;