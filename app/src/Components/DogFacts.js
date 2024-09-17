import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getDogFacts } from '../Actions'

const DogFacts = (props) => {
    const { facts, isFetching, error } = props
    useEffect(() => {
        props.getDogFacts()
    }, [])

    if(error) {
        return <h2>There seems to be an error: {error}</h2>
    }
    if(isFetching) {
        return <h2>Loading dog facts for you!</h2>
    }

    const handleClick = () => {
        props.getDogFacts()
    }
    return(
        <>
        <div>
            <h2>Did you know...{facts.fact}</h2>
        </div>
        <button onClick={handleClick}>More Facts!</button>
        </>
    )
}
const mapStateToProps = state => {
    return {
        facts:state.facts,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getDogFacts})(DogFacts)