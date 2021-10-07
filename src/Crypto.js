import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getOrders} from './actions'


const Crypto = (props) => {
    const { crypto, isFetching, error } = props;

    useEffect(() => {
        props.getOrders()
    }, [])

    if(error) {
    return <h2>Error Loading Page: {error}</h2>
    }

    if(isFetching) {
        return <h2>Fetching your Crypto</h2>
    }

    const handleClick = () => {
        props.getOrders()
        console.log('CRYPTO:', crypto)
    }
    // const coins = crypyo
    return (

        <div>
            <h2>Stats</h2>
            {crypto.map(coin => {
                return(<div style={{
                    backgroundColor: "black",
                    color:"white"
                }}>
                    <h1>{coin.name}</h1>
                    <h2>{coin.symbol}</h2>

                    <img src={coin.icon}/>
                    <h3>Current Price: ${coin.price}</h3>
                    <h3>Market Cap: ${coin.marketCap}</h3>
                    <h3>Available Supply: {coin.availableSupply}</h3>
                     <h4>Ranking: {coin.rank}</h4>
                     <h4><a href={coin.websiteUrl}>Website: {coin.websiteUrl}</a></h4>
                     <h4><a href={coin.twitterUrl}>Twitter: {coin.twitterUrl}</a></h4>
                     

                    <h2>{coin.id}</h2>
                </div>)
            })}


            <button onClick={handleClick}>Update Stats</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return({
        crypto: state.crypto,
        error: state.error,
        isFetching: state.isFetching
    })
}
export default connect(mapStateToProps, {getOrders})(Crypto)
