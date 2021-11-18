import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favouritelist: localStorage.getItem("favouritelist")
    ? JSON.parse(localStorage.getItem("favouritelist"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouritelist", JSON.stringify(state.favouritelist));
  }, [state]);

  const addMovieTofavouritelist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITELIST", payload: movie });
  };

  const removeMovieFromfavouritelist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITELIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouritelist: state.favouritelist,
        addMovieTofavouritelist,
        removeMovieFromfavouritelist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
