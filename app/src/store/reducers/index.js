const initialState = {
  isLoading: false,
  error: "",
  pokemon: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
