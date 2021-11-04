import React, { useState, useEffect } from 'react';
import Trending from './components/Trending';
import { getTrendingMovies } from './actions/movieActions';
import { connect } from 'react-redux';
import './App.css';


function App({ getTrendingMovies, movies }) {
  const [trendingMovies, setTrendingMovies] = useState(movies)

  useEffect(() => {
    getTrendingMovies()
}, [])

  return (
    <div className="container">
      <div className="movies">
        <Trending trendingMovies={trendingMovies}/>
      </div>
    </div>

  );
}
const mapStateToProps = ({ movieReducers }) => {
  return ({
      movies: movieReducers
  })
}

export default connect(mapStateToProps, {getTrendingMovies})(App)
