import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Card title="Football" description="I love watching football" />
      <Card title="Coding" description="Learning React is fun" />
      <Card title="Music" description="I enjoy listening to music" />
      <Footer />
    </div>
  );
}

export default App;