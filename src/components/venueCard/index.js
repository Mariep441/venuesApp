import React from "react";
import { Link } from "react-router-dom";
import "./venueCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VenueCard = ({venue, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/venues/${venue.id}`}>
      <h4 className="card-title ">{venue.name}</h4>
        </Link>
        <div className="card-body">
          <h6>
          <span> {venue.categories[0].name}</span>
          </h6>
          <p>
            <span> {venue.location.address}</span>
          </p>
          <p>
            <span> {venue.location.city}</span>
          </p>
          <p>
            <span> {venue.location.country}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(venue)}
        </div>
      </div>
    </div>
  );
};

export default VenueCard;