import './App.css';
import DogFactsForm from './components/DogFactsForm';
import DogFacts from './components/DogFacts';

function App() {
  return (
    <div className="App">
      <DogFactsForm />
      <DogFacts />
      <img 
      src={`https://www.vets4pets.com/siteassets/species/dog/two-dogs-running-with-balls.jpg?w=585&scale=down`} 
      alt="Dogs playing together :)"
      style={{ height: "300px", padding: "30px" }}
      />
    </div>
  );
}

export default App;