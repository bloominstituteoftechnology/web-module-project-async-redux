import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchError, getjoke } from '../actions';

const Joke = ({ joke, isFetching, error, dispatch }) => {

  useEffect(()=> {
    dispatch(getjoke());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching joke for ya!</h2>;
  }


  const handleClick = () => {
    dispatch(getjoke());
    // dispatch(fetchError("this causes an eror now"));

    //0. connect our actions to this component
    //1. make a api call to https://randomuser.me/api/
    //2. if call is successful: dispatch fetchSuccess passing in our joke
    //3. if call is not successful: dispatch fetchError passing in error message
  }

  return (
    <>
      <div>
        <h3>{joke.category}</h3>
        <h2>{joke.setup}</h2>
        <h1>{joke.delivery}</h1>
      </div>
      <button onClick={handleClick}>Get new joke</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Joke);