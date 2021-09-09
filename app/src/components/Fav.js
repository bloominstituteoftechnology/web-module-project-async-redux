import React from "react";
import { connect } from "react-redux";

import { removeFavorites } from "../actions/favoritesAction";

const Fav = (props) => {
  return (
    <>
      <div>
        <p>
          {props.fav.name} is currently ${props.fav.current_price}
        </p>
      </div>
      <div>
        <button>Stop Tracking {props.fav.name}</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorites })(Fav);
