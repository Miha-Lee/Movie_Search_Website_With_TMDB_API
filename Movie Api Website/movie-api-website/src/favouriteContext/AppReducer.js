export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVOURITELIST":
      return {
        ...state,
        favouritelist: [action.payload, ...state.favouritelist],
      };
    case "REMOVE_MOVIE_FROM_FAVOURITELIST":
      return {
        ...state,
        favouritelist: state.favouritelist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
