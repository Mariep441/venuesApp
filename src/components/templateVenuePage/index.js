import React from "react";
import VenueHeader from '../headerVenue'
import "./venuePage.css";

const TemplateVenuePage = ({ venue, children }) => {
  return (
    <>
      <VenueHeader venue={venue} />
      <div className="row">
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateVenuePage;