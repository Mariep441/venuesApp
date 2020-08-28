import React, { useContext,  useState, useEffect } from "react";
import PageTemplate from '../components/search'
import StubAPI from "../api/stubAPI";
import SearchButton from '../components/buttons/addSearch'

const VenueSearchPage = () => {

  return (
      <PageTemplate 
       action={search=> <SearchButton search={search} />}
      />
      
  );
};

export default VenueSearchPage;

