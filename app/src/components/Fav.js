import React from "react";
import { connect } from "react-redux";

const Fav = (props) => {
  return (
    <div>
      <p>
        {props.favorites.name} is currently ${props.favorites.current_price}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Fav);
