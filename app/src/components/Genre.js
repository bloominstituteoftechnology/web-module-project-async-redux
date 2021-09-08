import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchFail, fetchSuccess } from '../actions';

export const Genre = (props) => {

    const { error, genre } = props;

    const handleClick = () => {
        axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
          .then(resp => {
            // console.log(resp.data);
            props.fetchSuccess(resp.data)
          })
          .catch(err => {
            console.log('axios error: ', err)
          })
      };

    const handleError = () => {
        props.fetchFail();
    }

    return (
        <div>
            {error 
            ?   <div>
                    <h1>Uh Oh! {error}</h1>
                </div>
            :   <div>
                    <h1>New Genre: {genre}</h1>
                </div>
            }                    
            
            <button onClick={handleClick}>Genrenate Another!</button>
            <button onClick={handleError}>Wrong Note?</button>
        </div>
    )
};

const mapStateToProps = state => {
    return({
        genre: state.genre,
        error: state.error
    })
}

export default connect(mapStateToProps, {fetchFail, fetchSuccess})(Genre);