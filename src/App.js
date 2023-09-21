import React from 'react';
import './App.css';
import './index.css';
import PokeSearchForm from './components/PokeSearchForm';
import PokeData from './components/PokeData';
import { connect } from 'react-redux';

function App(props) { 
  const { loading } = props
  return (
    <div className="App">
      <h1 className='heading1'>Pokemon Card Finder!!</h1>
      <PokeSearchForm />
      {loading ? <h3> Gotta Load em all</h3> : <PokeData /> }
    </div>
  );
}

const mapStateToProps = state => {
  return {
   
    loading: state.loading
  };
};

export default connect(mapStateToProps)(App);
