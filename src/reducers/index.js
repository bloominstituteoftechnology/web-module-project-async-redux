
import testPokemonData from "../components/PokemonData";

const initialState = {
    pokemon: testPokemonData,
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