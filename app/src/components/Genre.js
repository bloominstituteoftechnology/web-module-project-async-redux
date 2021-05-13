import React, { useEffect } from "react";
import { connect } from "react-redux";

const Genre = (props) => {
  if (props.isFetching) {
    return <h1>Generating...</h1>;
  }

  return (
    <div>
      <h1>{props.genre}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {})(Genre);
