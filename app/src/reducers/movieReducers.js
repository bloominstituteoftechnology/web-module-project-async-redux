export default (state = null, action) => {
  switch (action.type) {
    case "SET_TRENDING_MOVIES":
    return action.movies
    default:
      return state
  }
}