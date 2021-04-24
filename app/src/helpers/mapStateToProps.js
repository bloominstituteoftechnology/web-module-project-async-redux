export const mapStateToProps = (...props) => (state) => {
  const map = {
    ...state,
  };
  props.forEach((prop) => (map[prop] = state[prop]));

  return map;
};
