import React from 'react';
import './App.css';
import GifList from "./components/GifList";
import GifForm from "./components/GifForm";
import { connect } from 'react-redux';

function App(props) {
  const { isFetching, error, data } = props
  
  if (error) {
    return <div>
      <h2 className="Error">{error}</h2>
      <h1>Search for Gifs</h1>
      <GifForm className="GifForm" />
      <GifList className="GifList" />
    </div>
  }
  else {
    return (
      <div className="App">
        {isFetching ? <h2>We are loading</h2> : <></>}
        <h1>Search for Gifs</h1>
        {data.length === 0 ? <div>
          <p className="Error"><strong >Search Bar EMPTY!</strong></p>
          <GifForm className="GifForm" />
          <GifList className="GifList" />
        </div> : <div>
          <GifForm className="GifForm" />
          <GifList className="GifList" />
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);