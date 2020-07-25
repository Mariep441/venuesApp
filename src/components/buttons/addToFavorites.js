import React, { useContext } from "react";
import {VenuesContext} from "../../contexts/venuesContext";

const AddToFavoriteButton = ({ venue }) => {
  const context = useContext(VenuesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(venue.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;