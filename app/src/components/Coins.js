import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCoin } from '../actions';

const Coins = ({ coin, isFetching, error, getCoin }) => {
    useEffect(() => {
    });

    if (error) {
        return <h2> We got an error: {error} </h2>
    }
    // if (isFetching) {
    //     return <h2> Fetching coin! </h2>
    // }
    return (
        <>
            <h2>{coin.current_price}</h2>
            <button onClick={() => getCoin()}>show value</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        coin: state.coin,
        // isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getCoin })(Coins);