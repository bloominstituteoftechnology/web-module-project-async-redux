import React from "react";

const Crypto = (props) => {
  return (
    <div>
      <div>
        <img>{props.crypto.image}</img>
      </div>
      <h4>{props.crypto.name}</h4>
      <p>{props.crypto.current_price}</p>
    </div>
  );
};

export default Crypto;
