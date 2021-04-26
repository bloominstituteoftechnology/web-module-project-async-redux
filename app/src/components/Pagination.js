import React, { useEffect, useRef } from "react";
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

  // const handleKeyDown = (e) => {
  //   console.log(e.key);
  //   if (e.key === "ArrowLeft" || "ArrowRight") {
  //     e.preventDefault();
  //     setKeyDown(e.key);
  //   }
  // };

  const { totPokemonCount, nextCall, prevCall, currentCall } = pagination;

  // const nextButton = useRef();

  useEffect(() => {
    if (userKeyDown === "ArrowLeft") {
      fetchUrlPokemon(prevCall);
    } else if (userKeyDown === "ArrowRight") {
      fetchUrlPokemon(nextCall);
    }
  }, [userKeyDown, fetchUrlPokemon, prevCall, nextCall]);

  return (
    <div
      // autofocus
      // tabIndex="-1"
      // onKeyDown={handleKeyDown}
      className="pagination"
    >
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
          // ref={nextButton}
        />
      ) : null}
    </div>
  );
};

const mapState = mapStateToProps("pagination", "userKeyDown");

export default connect(mapState, { fetchUrlPokemon, setKeyDown })(Pagination);
