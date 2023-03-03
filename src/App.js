import {connect} from 'react-redux'
import React from 'react';
import './App.css';
import { data } from './data/jokes';
import JokesList from './components/JokesList';
import JokeForm from './components/JokeForm';

function App(props) {
  const {loading, error} = props

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

export default connect(mapStateToProps)(App);