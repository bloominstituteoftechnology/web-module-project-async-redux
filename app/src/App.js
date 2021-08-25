import './App.css';
import DogFactsForm from './components/DogFactsForm';
import DogFacts from './components/DogFacts';

function App() {
  return (
    <div className="App">
      <DogFactsForm />
      <DogFacts />
    </div>
  );
}

export default App;