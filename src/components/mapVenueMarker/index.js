import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const venueMarker = ({venue, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/venues/${venue.id}`}>
      <h4 className="card-title ">{venue.name}</h4>
        </Link>
        <div className="card-body">
          <span> {venue.location.lat}</span>
          <p>
            <span> {venue.location.lng}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default venueMarker;