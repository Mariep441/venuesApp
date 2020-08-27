import React, { useContext } from "react";
import PageTemplate from '../components/templateVenueListPage'
import {VenuesContext} from '../contexts/venuesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const VenueListPage = () => {
  const context = useContext(VenuesContext);

  return (
      <PageTemplate 
        name='All Venues'
        venues={context.venues}
        action={venue => <AddToFavoritesButton venue={venue} /> }
      />
  );
};

export default VenueListPage;