import React from "react";
import Venue from "../venueCard/";
import "./venueList.css";

const VenueList = ({venues, action}) => {
  const venueCards = venues.map(v => (
    <Venue key={v.id} venue={v} action={action} />
  ));
  return <div className="row venues bg-info">{venueCards}</div>;
};

export default VenueList;