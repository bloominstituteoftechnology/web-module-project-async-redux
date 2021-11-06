import { useEffect} from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import {getMovie, fetchSuccess, fetchStart, fetchError } from '../actions/movieActions';
import axios from 'axios';

const Movie = ( props ) => {
  const { movie, isFetching, error, dispatch } = props

  useEffect(()=> {
    dispatch(getMovie());     
  }, []);

  if (error) { return <h2>We got an error: {error}</h2>; }
  if (isFetching) { return <h2>Fetching movie for ya!</h2>; }

  const handleClick = () => {
    dispatch(getMovie()); 
  }
  
    return (
      <>
        <div>     
            <h1>Movie</h1>
          <h2>{movie.name} </h2>        
          <img src={movie.image.medium}/>
          <p>network: {movie.network.name} </p>
          <div>
            { ReactHtmlParser(movie.summary) }
          </div>
          <p>rating: {movie.rating.average} </p>
        </div>
        <button onClick={handleClick}>Choose me another show</button>
      </>
    );
  };
  
  const mapStateToProps = state => {  
    console.log('state', state);
    return {
      movie: state.movieReducer.movie,
      isFetching: state.movieReducer.isFetching,
      error: state.movieReducer.error
    };
  };
  
  export default connect(mapStateToProps)(Movie);