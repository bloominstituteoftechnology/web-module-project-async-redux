import React, {Fragment } from 'react'

import './styles.css'

const Trending = ({ trendingMovies }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/w154'
    const apiStart = '?api_key='
    const apiKey = '33326a06b3b44816bd1b2d0a700be3f4'

    return (
        <Fragment>
           {
        trendingMovies.map(movie => (
            <div className="wrapper">
            <div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{movie.title}</h1>
				<div className="card_cat">
					<p className="PG">{movie.adult ? 'Over 18' : 'Under 18'}</p>
					<p className="year">{movie.release_date}</p>
					<p className="genre">{movie.original_language}</p>
				</div>
				<p className="disc">{movie.overview}</p>
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src={`${baseUrl}${movie.poster_path}${apiStart}${apiKey}`} alt="" />
				</div>
				<div className="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
        </div>
        ))
    }
        </Fragment>
    )
}



export default Trending