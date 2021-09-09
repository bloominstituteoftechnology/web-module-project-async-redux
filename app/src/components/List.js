import React, { useEffect } from "react";
import { connect } from "react-redux";

import Crypto from "./Crypto";

import { getCoinData } from "../actions/listAction";

const List = (props) => {
  const { cryptos } = props;
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
    cryptos: state.list.cryptos,
    isFetching: state.list.isFetching,
    error: state.list.error,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
