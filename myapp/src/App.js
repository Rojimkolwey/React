function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Football" description="I love watching football" />
      <Card title="Coding" description="Learning React is fun" />
      <Card title="Music" description="I enjoy listening to music" />
    </div>
  );
}

export default App;