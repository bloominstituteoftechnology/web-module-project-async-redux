import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import { fetchUrlPokemon } from "../store";

const Pagination = ({ pagination, onDisplayCount, fetchUrlPokemon }) => {
  return (
    <div className="pagination">
      {pagination.prevCall ? <button>Prev</button> : null}
      <p>
        Displaying {onDisplayCount} of {pagination.pokemonCount} Pokemon
      </p>
      {pagination.nextCall ? (
        <button
          onClick={() => {
            fetchUrlPokemon(pagination.nextCall);
          }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

const mapState = mapStateToProps("pagination");

export default connect(mapState, { fetchUrlPokemon })(Pagination);
