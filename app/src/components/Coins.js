import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRandomCoin } from '../actions';

const Coins = ({ coin, isFetching, error, getRandomCoin }) => {
    useEffect(() => {
    });

    if (error) {
        return <h2> We got an error: {error} </h2>
    }
    if (isFetching) {
        return <h2> Fetching coin for ya! </h2>
    }
    return (
        <>
            <h2>{coin.id}</h2>
            <h2>{coin.symbol}</h2>
            <h2>{coin.name}</h2>
            <button onClick={() => getRandomCoin()}>Get new coin</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        coin: state.coin,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getRandomCoin })(Coins)