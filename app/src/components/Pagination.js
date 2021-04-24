import React from "react";
import { connect } from "react-redux";

const Pagination = ({ pagination, onDisplayCount }) => {
  return (
    <div className="pagination">
      {pagination.prevCall ? <button>Prev</button> : null}
      <p>
        Displaying {onDisplayCount} of {pagination.pokemonCount} Pokemon
      </p>
      {pagination.nextCall ? <button>Next</button> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pagination: state.pagination,
  };
};

export default connect(mapStateToProps, {})(Pagination);
