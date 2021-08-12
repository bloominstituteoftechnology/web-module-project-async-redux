import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import BreweryCard from './BreweryCard'
import { getBreweries } from '../actions'

const Breweries = (props) => {
    const { breweries, isFetching, error } = props

    useEffect(() => {
        getBreweries()
    },[])

    if(isFetching) {
        return <h2>Fetching the breweries</h2>
    }
    if(error) {
        return <h2>There was an error: </h2>
    }

    return(<div>
        {breweries.map((brewery, index) => {
            return <BreweryCard key={index} brewery={brewery}/>
        })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        breweries: state.breweries,
        error: state.error,
        isFetching: state.isFetching
    })
}

export default connect(mapStateToProps, {getBreweries})(Breweries);