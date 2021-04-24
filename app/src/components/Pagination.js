import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";

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

const mapState = mapStateToProps("pagination");

export default connect(mapState, {})(Pagination);
