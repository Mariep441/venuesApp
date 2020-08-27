import React from "react";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{pathname: `/list`}}
    >
     
    </Link>
  );
};

export default SearchButton;