import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const VenueHeader = ({ venue }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {venue.name}
          {"  "}
          <a href={venue.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default VenueHeader;