import axios from 'axios'

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_SUCCESS = 'FETCHIN_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'


export const fetchApi = () => (dispatch) =>{


dispatchEvent({type: FETCHING_START})

axios.get('https://api.thecatapi.com/v1/images/search')

.then((res => {
    console.log( 'cats:', res.data)
    dispatch({type: FETCHING_SUCCESS, paylod: res.data})
}))
.catch(err =>{
    console.log(err);
    dispatch({type: FETCHING_FAILURE, payload: err})
})

}
