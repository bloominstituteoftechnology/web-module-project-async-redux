import React from "react";
import "./Components.css";

const Crypto = (props) => {
  return (
    <div className="crypto">
      <div className="image">
        <img alt={props.crypto.name} src={props.crypto.image} />
      </div>
      <div className="cryptoInfo">
        <p>Name: {props.crypto.name}</p>
        <p>Symbol: {props.crypto.symbol}</p>
        <p>Market Cap Rank: {props.crypto.market_cap_rank}</p>
        <p>Market Capitalization: ${props.crypto.market_cap}</p>
        <p>Current Price: ${props.crypto.current_price}</p>
        <p>ATH: ${props.crypto.ath} </p>
        <p>Circulating Supply: {props.crypto.circulating_supply}</p>
        {props.crypto.max_supply && (
          <p>Total Supply: {props.crypto.max_supply}</p>
        )}
        <span>
          <input
            type="button"
            className="addFavButton"
            value="Add To Favorites"
          />
        </span>
      </div>
    </div>
  );
};

export default Crypto;
