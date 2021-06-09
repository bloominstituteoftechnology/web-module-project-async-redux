import {GET_POKEMON, FETCH_FAIL, FETCH_START, FETCH_SUCCESS} from "../action/pokeaction.js"

const initialState = {
    name: "bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass",
    id: 1
};


const reducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_SUCCESS:
            console.log("reducer")
            let newPokemon = {
                name: action.payload.name,
                id: action.payload.id,
                type: action.payload.types[0].type.name,
                image: action.payload.sprites.front_default
            }
            return{
                newPokemon
            }
        default:
            return state;
    }
};

export default reducer;