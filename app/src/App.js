import logo from './logo.svg';
import './App.css';
import BreweryList from './Components/BreweryList';
// import data from './Data/brewery';
import { useEffect } from 'react'; // step 21 
import {fetchStart } from './actions'; //step 23 
import BreweryForm from './Components/BreweryForm';
import axios from 'axios';

function App(props) {

  const { loading, brewery } = props //step 11

 useEffect(()=>{ //step 22 

 }, [])

  return (
    <div className="App">
     <h1>Search for Drinks</h1>

     <BreweryForm /> 

      {
        (error !== '') && <h3>{error}</h3>// step 14 
      }

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

const mapActionToProps = () => {//step 25 
  return {
    fetchStart
  }
}

export default connect(mapStateToProps, {fetchStart})(App);//step 9 connect // step 24 put fetch start 
