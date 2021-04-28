import React, { useEffect } from "react";
import { jokeActions } from "../actions/jokeActions";
import { connect } from "react-redux";

const Joke = (props) => {
  useEffect(() => {
    props.jokeActions();
  }, [props.jokeActions]);

  if (props.loading) {
    return <p>Fetching joke...</p>;
  }

  return (
    <div>
      <h2>{props.joke.setup}</h2>
      <h2>{props.joke.punchline}</h2>
      <button onClick={() => props.jokeActions()}>Fetch joke</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    loading: state.loading,
  };
};

const mapDispatchToProps = { jokeActions };

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
