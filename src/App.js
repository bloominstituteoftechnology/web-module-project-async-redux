import React from 'react';
import './App.css';
import GifList from "./components/GifList";
import GifForm from "./components/GifForm";
import { connect } from 'react-redux';

function App(props) {
  const { isFetching, error } = props

  if (isFetching) {
    return <h2>We are loading</h2>;
  }

  else if (error) {
    return <h2>ERROR: {error}</h2>
  }
  else {
    return (
      <div className="App">
        <h1>Search for Gifs</h1>

        <GifForm />
        <GifList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);