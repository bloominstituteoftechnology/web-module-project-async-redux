import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { cuteDog } from '../actions'

const DogPics = (props) => {
    const { dog, isFetching, error } = props
    useEffect((props) => {
        props.dispatch(cuteDog())
    },[])

    const handleClick = () => {
        props.dispatch(cuteDog())
    }

    if(error) {
        return <h2>Problems this way: {error}</h2>
    }

    if(isFetching) {
        return <h2>Fetching cute dogs!</h2>
    }

    return(
        <>
        <div>
            <h1>Dogs are dominant!!</h1>
            <img src={dog} alt='dog' />
        </div>
        <button onClick={handleClick}>Show me more Dogs...</button>
        </>
    )
}

const mapStateToProps = state => {
    return{ dog:state.dog, isFetching:state.isFetching, error:state.error }
}

export default connect(mapStateToProps)(DogPics)