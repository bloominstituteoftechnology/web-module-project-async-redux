import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import { fetchUrlPokemon } from "../store";

const Pagination = ({ pagination, onDisplayCount, fetchUrlPokemon }) => {
  //
  const { totPokemonCount, nextCall, prevCall, currentCall } = pagination;

  return (
    <div className="pagination">
      {prevCall ? (
        <button
          onClick={() => {
            fetchUrlPokemon(prevCall);
          }}
        >
          Previous {currentCall.callCount} of {currentCall.prevCount}
        </button>
      ) : null}
      <p>
        Displaying {onDisplayCount} of {totPokemonCount} Pokemon
      </p>
      {nextCall ? (
        <button
          onClick={() => {
            fetchUrlPokemon(nextCall);
          }}
        >
          Next {currentCall.callCount} of {currentCall.nextCount}
        </button>
      ) : null}
    </div>
  );
};

const mapState = mapStateToProps("pagination");

export default connect(mapState, { fetchUrlPokemon })(Pagination);
