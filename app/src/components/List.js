import React, { useEffect } from "react";
import { connect } from "react-redux";

import Crypto from "./Crypto";
import Search from "./Search";

import { getCoinData } from "../actions/listAction";

const List = (props) => {
  const { cryptos } = props;
  useEffect(() => {
    props.getCoinData();
  }, []);

  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        {cryptos.map((crypto) => {
          return <Crypto key={crypto.id} crypto={crypto} />;
        })}
      </div>
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
