import React from "react";
import { connect } from "react-redux";

import Fav from "./Fav";

const Favorites = (props) => {
  return (
    <>
      <div>
        <h3> Favorites Price Tracker </h3>
      </div>
      <div>
        {props.favorites.map((fav) => {
          return <Fav key={fav.market_cap_rank} fav={fav} />;
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
