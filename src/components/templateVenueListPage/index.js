import React, { useState } from "react";
import Header from "../headerVenueList";
import VenueList from "../venueList";
import FilterControls from "../filterControls";

const VenueListPageTemplate = ({venues, name, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [subCategoryFilter, setSubCategoryFilter] = useState("0");
  const subCategory = Number(subCategoryFilter)
  let displayedVenues = venues
    .filter(v => {
      return v.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(v => {
      return  subCategory > 0
        ? v.subCategory_ids.includes(Number(subCategoryFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setSubCategoryFilter(value);
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