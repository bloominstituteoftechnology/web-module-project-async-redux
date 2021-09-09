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
        <button onClick={handleClick}>Go Phish</button>
        <button onClick={handleError}>Ripcord?</button>
        <div>   
            <h5>{show.date}</h5>          
            <h2>{show.venue_name}</h2>
            {/* <h4>{show.venue.location}</h4> */}
            
                    <h4 className='set-one'>SET ONE</h4>
                    {show.tracks.map(track => {
                        return (
                            <div>
                                {track.set === '1'
                                ?   <div>
                                        <li
                                            className='track'
                                            key={track.id}
                                        >
                                            {track.title}
                                        </li>    
                                    </div>
                                : <div></div>}
                            </div>
                        )
                    })}

                    <h4 className='set-one'>SET TWO</h4>
                    {show.tracks.map(track => {
                        return (
                            <div>
                                {track.set === '2'
                                ?   <div>
                                        <li
                                            className='track'
                                            key={track.id}
                                        >
                                            {track.title}
                                        </li>    
                                    </div>
                                : <div></div>}
                            </div>
                        )
                    })}

                    <h4 className='set-one'>ENCORE</h4>
                    {show.tracks.map(track => {
                        return (
                            <div>
                                {track.set === 'E'
                                ?   <div>
                                        <li
                                            className='track'
                                            key={track.id}
                                        >
                                            {track.title}
                                        </li>    
                                    </div>
                                : <div></div>}
                            </div>
                        )
                    })}
                    
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