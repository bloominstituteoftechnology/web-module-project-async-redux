import {connect} from 'react-redux'
import React from 'react';
import './App.css';

import { useEffect } from 'react';

import { data } from './data/jokes';
import JokesList from './components/JokesList';
import JokeForm from './components/JokeForm';
import { fetchError, fetchStart, fetchSuccess, getJokes } from './action';

function App(props) {
  const {loading, error, getJokes} = props


  useEffect(()=> {
    getJokes();
  },[])
  // if(error !== ''){
  //   return <h3>{error}</h3>
  // }
  return (
    <div className="App">
      <h1>I'm Bored. Crack Me Up!</h1>
      <JokeForm/>
      {
        (error !== '') && <h3>{error}</h3>
      }
      {
        loading ? <h3>We are loading a joke </h3> : <JokesList/>
      }

    </div>
  );
}
import JokeList from './components/JokesList';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  }
}

// const mapActionsToProps = () => {
//   return {
//     fetchStart: fetchStart
//   }
// } This is what the second part of mapState means

export default connect(mapStateToProps, {getJokes})(App);