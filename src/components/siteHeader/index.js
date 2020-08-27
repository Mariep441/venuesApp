import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          FourSquare Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "suitcase"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the travel enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "globe-europe"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/list">
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/venues/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/mapView">
              Map
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;