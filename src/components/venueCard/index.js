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

        </Link>
        <div className="card-body">
          <h4 className="card-title ">{venue.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {venue.categories[0].name}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {venue.name}</span>
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