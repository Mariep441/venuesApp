import React from "react";
import { Link } from "react-router-dom";

const TipButton = ({ venue }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/tips/form`,
        state: {
          venue: venue
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default TipButton;