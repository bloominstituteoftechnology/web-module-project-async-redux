import React, {useEffect} from 'react';
import './App.css';
import './index.css';
import PokeSearchForm from './components/PokeSearchForm';
import PokeData from './components/PokeData';
import { connect } from 'react-redux';
import { fetchPokemon } from './actions'; // Import your action creator

function App(props) {
  const { loading, fetchPokemon} = props;

   useEffect(() => {
    // Call the fetchPokemon action with any necessary data
  fetchPokemon();
  }, []);

  return (
    <div className="App">
      <h1 className='heading1'>Pokemon Card Finder!!</h1>
      <PokeSearchForm />
      {loading ? <h3> Gotta Load em all</h3> : <PokeData />}
      {}
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});



export default connect(mapStateToProps, {fetchPokemon})(App);
