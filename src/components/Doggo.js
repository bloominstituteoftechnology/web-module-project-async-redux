import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getDog } from "../actions";
import './Doggo.css'
const Forza = (props) => {
    const { picture, isFetching, error} = props;

     useEffect(() => {
         props.getDog();
     }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching a cute doggo!</h2>;
    }

     const handleClick = () => {
         props.getDog();
     }

    return (
        <>
          <div className='doggo-container'>
              <h2>Take a look at this cute doggo!!</h2>
              <img src={picture} />
          </div>
          <button onClick={handleClick}>Get a cute doggo!</button>
        </>
    )
};

const mapStateToProps = state => {
    return{
        picture: state.picture,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getDog })(Forza);