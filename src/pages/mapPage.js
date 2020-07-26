import React, { useContext } from "react";
import PageTemplate from '../components/templateVenueListPage'
import {VenuesContext} from '../contexts/venuesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import Map from '../components/map'


const MapPage = () => {
  const context = useContext(VenuesContext);

  return (
      <Map 
        title='All Venues'
      />
  );
};

export default MapPage;