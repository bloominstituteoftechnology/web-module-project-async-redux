import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSuggestion } from './../actions';

const Suggestion = (props) => {

  useEffect(()=>{
   props.dispatch(getSuggestion())
  },[]);

  if (props.state.isFetching) {
    return <h2>Fetching your suggestion!</h2>;
  }
  if (props.state.error) {
    return <h2>Error: {props.state.error}</h2>;
  }

  const handleClick = () =>{
    props.dispatch(getSuggestion())
  }

  return (
    <>
      <div>
        <h2>Here's what you should do:</h2>
        <p>{props.state.suggestion.activity}</p>
        <p>Activity Type: {props.state.suggestion.type}</p>
      </div>
      <button onClick={handleClick}>Get new suggestion</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
   state
  };
};

export default connect(mapStateToProps)(Suggestion);