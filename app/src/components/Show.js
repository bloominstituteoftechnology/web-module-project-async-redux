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
    <div className='content'>
        <button onClick={handleClick}>Go Phish</button>
        <button onClick={handleError}>Ripcord?</button>
        <div className='show-container'>
            <div className='show-info'>  
                <h5>{show.date}</h5>          
                <h2>{show.venue_name}</h2>
                <h4>{show.venue.location}</h4>
            </div>
                <div className='setlist-container'>
                    <h4 className='set-one'>SET ONE</h4>
                    {show.tracks.map(track => {
                        return (
                            <div className='set-one-container'>
                                {track.set === '1'
                                ?   <div>
                                        <li
                                            className='track'
                                            key={track.id}
                                        >
                                            <a
                                                className='audio-link'
                                                target='_blank'
                                                href={track.mp3}
                                            >
                                                {track.title}
                                            </a>
                                        </li>    
                                    </div>
                                : <div></div>}
                            </div>
                        )
                    })}

                    <h4 className='set-two'>SET TWO</h4>
                    {show.tracks.map(track => {
                        return (
                            <div className='set-two-container'>
                                {track.set === '2'
                                ?   <div>
                                        <li
                                            className='track'
                                            key={track.id}
                                        >
                                            <a
                                                className='audio-link'
                                                target='_blank'
                                                href={track.mp3}
                                            >
                                                <div className='track-info'>
                                                {track.title}
                                                </div>
                                            </a>
                                        </li>    
                                    </div>
                                : <div></div>}
                            </div>
                        )
                    })}

                    <h4 className='encore'>ENCORE</h4>
                    {show.tracks.map(track => {
                        return (
                            <div className='encore-container'>
                                {track.set === 'E'
                                ?   <div>
                                        <li
                                            className='track'
                                            key={track.id}
                                        >
                                            <a
                                                className='audio-link'
                                                target='_blank'
                                                href={track.mp3}
                                            >
                                                {track.title}
                                            </a>
                                        </li>    
                                    </div>
                                : <div></div>}
                            </div>
                        )
                    })}
                </div>        
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