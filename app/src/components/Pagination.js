import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import { fetchUrlPokemon } from "../store";

const Pagination = ({
  pagination,
  onDisplayCount,
  fetchUrlPokemon,
  userKeyDown,
}) => {
  //
  const { totPokemonCount, nextCall, prevCall, currentCall } = pagination;

  useEffect(() => {
    if (userKeyDown === "ArrowLeft") {
      fetchUrlPokemon(prevCall);
    } else if (userKeyDown === "ArrowRight") {
      fetchUrlPokemon(nextCall);
    }
  }, [userKeyDown, fetchUrlPokemon, prevCall, nextCall]);

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

const mapState = mapStateToProps("pagination", "userKeyDown");

export default connect(mapState, { fetchUrlPokemon })(Pagination);
