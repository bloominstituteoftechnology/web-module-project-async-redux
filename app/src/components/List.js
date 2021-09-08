import React, { useEffect } from "react";
import { connect } from "react-redux";

import Crypto from "./Crypto";

import { getCoinData } from "./../actions/";

const List = (props) => {
  const { cryptos, isFetching, error } = props;
  useEffect(() => {
    props.getCoinData();
  }, []);

  return (
    <div>
      {cryptos.map((crypto) => {
        return <Crypto key={crypto.market_cap_rank} crypto={crypto} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptos: state.cryptos,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
