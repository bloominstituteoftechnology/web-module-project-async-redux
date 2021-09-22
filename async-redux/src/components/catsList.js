import React from "react";
import { connect } from "react-redux";

import { getCats } from "../actions";

const catsList = (props) => {
  const fetchCats = (e) => {
    e.preventDefault();
    props.getCats();
  };

  return (
    <>
      <h2>Welcome to Cat World!</h2>
      {props.isFetching && <p>Fetching your Cats</p>}
      <div>
        {props.cats.map((cats) => (
          <h4 key={cats.url}>{cats.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchCats}>Fetch Cats!</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getCats })(catsList);
