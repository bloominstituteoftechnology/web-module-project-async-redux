import axios from 'axios'

export const DATA_LOADING = 'DATA_LOADING'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_LOAD_ERR = "DATA_LOAD_ERR"

export const fetchData = () => {
    return (dispatch) => {
        //dispatch LOAD 
        //axios
        //  .then( dispatch add result)
        //  .catch( dispatch log error message)

        dispatch({type:DATA_LOADING})

        axios.get("https://www.dnd5eapi.co/api/classes")
            .then(res => {
                console.log(res)
                dispatch({type:DATA_SUCCESS , payload: res.data.results})
            })
            .catch(err => console.log(err))

        
    }

}