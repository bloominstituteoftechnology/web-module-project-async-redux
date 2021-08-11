import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getFood} from './../actions'
import './Food.css'

const Food = (props) => {
    const { image, isFetching, error } = props
    useEffect(()=> {
        props.getFood()
    },[]);

    const handleClick = () => {
        props.getFood()
    }
    if (error) {
        return <p>{error}</p>
    }
    if (isFetching) {
        return <p>Hold on. We're thinking about what you should have!</p>
    }

    return(
        <>
            <div className="body">
                <button onClick={handleClick}>Click here to get a random food idea</button>
                <h4>Your random food is...</h4>
                <img src={image} alt="food"/>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return{
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect (mapStateToProps, {getFood})(Food)