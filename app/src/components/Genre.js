import React from "react";
import { connect } from "react-redux";

const Genre = (props) => {
  return (
    <div>
      <h3>{props.genre}</h3>
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
