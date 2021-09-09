import React, {useEffect, useRef} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchFail, fetchSuccess, fetchStart, getShow } from '../actions';
import {Howl} from 'howler'


export const Show = (props) => {
    const { error, show, getShow, fetchFail, isFetching } = props;

    useEffect(() => {
        getShow()
    },[])

    if (error) {
        return (
        <div>
            <h2>Uh oh! {error}</h2>
        </div>
        )
    }

    if (isFetching) {
        return <h6>Phishin' for ya</h6>
    }

    const handleClick = () => {
        getShow();
    };

    const handleError = () => {
        fetchFail();
    };

    return (
    <div>
        <button onClick={handleClick}>Genrenate Another!</button>
        <button onClick={handleError}>Wrong Note?</button>
        <div>   
            <h1>{show.date}</h1>          
            <h1>{show.venue_name}</h1>
            <ul>
                {show.tracks.map(track => {

                    return (
                        <div>
                            <li
                                className='track'
                                key={track.id}

                            >
                                {track.title}
                            </li>
                        </div> 
                    )
                })}
            </ul>          
        </div>

    </div> 
    );
};

const mapStateToProps = state => {
    return({
        show: state.show,
        error: state.error,
        isFetching: state.isFetching
    })
}

export default connect(mapStateToProps, {fetchFail, fetchStart, fetchSuccess, getShow})(Show);