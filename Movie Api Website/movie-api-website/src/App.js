import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/movieListPage";
import Header from "./components/header";
import Favourite from "./components/favouriteMoviePage";
import { GlobalProvider } from "./favouriteContext/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favourite-movie-page">
            <Favourite />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
