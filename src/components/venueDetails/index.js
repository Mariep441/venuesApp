import React from "react";
import "./venueDetails.css";

export default ({ venue }) => {
  return (
    <>
      <h4>Location</h4>
      <p>{venue.location.formattedAddress}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Latitude
        </li>
        <li key="rut" className="list-group-item ">
          {venue.location.lat}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Longitude
        </li>
        <li key="rdv" className="list-group-item ">
          {venue.location.lng}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Categories
        </li>
        {venue.categories.map(c => (
          <li key={c.name} className="list-group-item">
            {c.name}
          </li>
        ))}
      </ul>

    </>
  );
};