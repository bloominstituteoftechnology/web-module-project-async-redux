

export const initialState = {
    pokemon: [
        {
            name:"bulbasaur",
            url:"https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            name:"ivysaur",
            url:"https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            name:"venusaur",
            url:"https://pokeapi.co/api/v2/pokemon/3/"
        }
    ]
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        default:
            return state;

        
    }
}