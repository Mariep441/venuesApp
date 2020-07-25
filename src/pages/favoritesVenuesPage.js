import React, {useContext} from "react";
import VenueListPageTemplate from "../components/templateVenueListPage";
import AddTipButton from '../components/buttons/addTip'
import {VenuesContext} from '../contexts/venuesContext'

const FavoriteVenuesPage = props => {
  const context = useContext(VenuesContext);
  return (
    <VenueListPageTemplate
      venues={context.favorites}
      title={"Favorite Venues"}
      action={venue => <AddTipButton venue={venue} />}
    />
  );
};

export default FavoriteVenuesPage;