import logo from './logo.svg';
import './App.css';
import BreweryList from './Components/BreweryList';
// import data from './Data/brewery';
import BreweryForm from './Components/BreweryForm';

function App(props) {

  const { loading, brewery } = props //step 11

  if (error !== '') { //step 14 
    return <h3>{error}</h3>;
  }

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
const mapStateToProps = state => {//step 10 
  return{
    brewery: state.brewery,
    loeading: state.loading,
    error: state.error // step 15 
  }
}

export default connect(mapStateToProps)(App);//step 9 connect 
