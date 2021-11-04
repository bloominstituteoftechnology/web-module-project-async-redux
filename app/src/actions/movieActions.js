import axios from "axios"
const apiKey = '33326a06b3b44816bd1b2d0a700be3f4'

export const setTrendingMovies = movies => {
    return {
        type: 'SET_TRENDING_MOVIES',
        movies
    }
}


export const getTrendingMovies = () => {
    return dispatch => {
        return axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                console.log('in fetch', response.data)
                dispatch(setTrendingMovies(response.data.results))
            }
        })
    }
}