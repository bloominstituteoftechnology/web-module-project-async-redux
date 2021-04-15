import axios from 'axios';

export const fetchData = () => {
    return (dispatch) => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}