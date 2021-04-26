import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import { fetchUrlPokemon, setKeyDown } from "../store";

const Pagination = ({
  pagination,
  onDisplayCount,
  fetchUrlPokemon,
  userKeyDown,
  setKeyDown,
}) => {
  //

  const { totPokemonCount, nextCall, prevCall, currentCall } = pagination;

  useEffect(() => {
    if (userKeyDown === "ArrowLeft") {
      prevCall
        ? fetchUrlPokemon(prevCall)
        : console.log("You're at the beginning");
    } else if (userKeyDown === "ArrowRight") {
      nextCall ? fetchUrlPokemon(nextCall) : console.log("You're at the end");
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
        <input
          type="button"
          value={`Next ${currentCall.callCount} of ${currentCall.nextCount}`}
          onClick={() => {
            fetchUrlPokemon(nextCall);
          }}
        />
      ) : null}
    </div>
  );
};

const mapState = mapStateToProps("pagination", "userKeyDown");

export default connect(mapState, { fetchUrlPokemon, setKeyDown })(Pagination);
