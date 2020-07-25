import React, { useState } from "react";
import Header from "../headerVenueList";
import VenueList from "../venueList";
import FilterControls from "../filterControls";

const VenueListPageTemplate = ({venues, name, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("0");
  const category = Number(categoryFilter)
  let displayedVenues = venues
    .filter(v => {
      return v.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(v => {
      return  category > 0
        ? v.category_ids.includes(Number(categoryFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setCategoryFilter(value);
  };

  return (
    <>
      <Header name={name} numVenues={displayedVenues.length} />
      <FilterControls onUserInput={handleChange} numVenues={displayedVenues.length}/>
      <VenueList
        action={action}
        venues={displayedVenues}
      ></VenueList>
    </>
  );
};

export default VenueListPageTemplate ;