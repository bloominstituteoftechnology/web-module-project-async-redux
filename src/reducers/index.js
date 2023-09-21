import PokemonData from "../components/PokemonData";
const initialState = {
    
    pokemon: PokemonData,
    loading: false,
    error: ''
}
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            default:
                return(state);
        }
}
    
export default reducer