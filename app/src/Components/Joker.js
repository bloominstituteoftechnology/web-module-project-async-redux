import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { gottaJoke } from '../Actions/actions';

const Joker = ({ jokes, isFetching, error, dispatch }) => {

  useEffect(() => {
    dispatch(gottaJoke());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }
  
  if (isFetching) {
    return <h2>Fetching you some jokes!!</h2>;
  }

  const handleClick = () => {
    dispatch(gottaJoke());
  }
  return (
    <>
        <div>
        <h2>{jokes.category}</h2>
        <h2>{jokes.setup}</h2>
        <h1>{jokes.delivery}</h1>
        </div>
        <button onClick={handleClick}>Got a new joke</button>
    </>
  )
};

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Joker);
