import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getShow, fetchFail } from '../thunk/actions/animeActions';
import './Anime.css'

const Anime = (props) => {
    const { show, isFetching, error} = props;

    useEffect(() => {
        props.getShow();
    }, []);

    if (error) {
        return <h2>Houston we have a problem: {error}</h2>
    }

    if (isFetching) {
        return <h2>Getting that show for you</h2>
    }

    const handleClick = () => {
        props.getShow();
    }

    const handleError = () => {
        props.fetchFail("You hit an error wall");
    }

    return (
        <>
        <div className="animeContent">
            <h2>Anime:{show.anime}</h2>
            <h3>Character:{show.character}</h3>
            <h3>Quote:"{show.quote}"</h3>
        </div>

        <button onClick={handleClick}>Get new quote</button>
        <button onClick={handleError}>Error Button</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
      show: state.show,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps, { getShow, fetchFail })(Anime);
