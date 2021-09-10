import logo from './logo.svg';
import './App.css';
import BreweryList from './Components/BreweryList';
import data from './Data/brewery';
import BreweryForm from './Components/BreweryForm';

function App(props) {
  const brewery = data; 
  const loading = false; 
  const error = '';

  return (
    <div className="App">
     <h1>Search for Drinks</h1>

     <BreweryForm /> 

     {
       loading ? <h3>We are loading</h3> : <BreweryList brewery={brewery}/>
     }
    </div>
  );
}

export default App;
