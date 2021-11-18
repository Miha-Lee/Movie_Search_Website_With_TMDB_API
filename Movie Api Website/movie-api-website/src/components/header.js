import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movie Search App</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/favourite-movie-page">Favourite Movie Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default header;
