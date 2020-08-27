import React from "react";
import "../../globals/fontawesome";
import "./headerVenue.css";

const VenueHeader = ({venue}) => {
  return (
    <div className="row">
        <h2>
          {venue.name}
        </h2>
    </div>
  );
};

export default VenueHeader;