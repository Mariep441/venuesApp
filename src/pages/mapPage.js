import React, { useContext } from "react";
import PageTemplate from '../components/templateVenueMapPage'
import {VenuesContext} from '../contexts/venuesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MapPage = () => {
  const context = useContext(VenuesContext);

  return (
    <PageTemplate
      name='All Venues'
      venues={context.venues}
      action={venue => <AddToFavoritesButton venue={venue} /> }
    />
  );
};

export default MapPage;