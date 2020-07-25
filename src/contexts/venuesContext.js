import React, { useEffect, createContext, useReducer } from "react";
import { getVenues } from "../api/foursquare-api";

export const VenuesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        venues: state.venues.filter((v) => v.id !== action.payload.venue.id),
        favorites: [...state.favorites, action.payload.venue],
      };
    case "load-venues":
      return { venues: [...action.payload.venues], favorites: [] };
      case "add-tip":
        return {
          venues: [...state.venues],
          favorites: [
            ...state.favorites.filter((v) => v.id !== action.payload.venue.id),
            { ...action.payload.venue, tip: action.payload.tip },
          ],
        };
     
    default:
      return state;
  }
};

const VenuesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { venues: [], favorites: [] });

  const addToFavorites = (venueId) => {
    const index = state.venues.map((v) => v.id).indexOf(venueId);
    dispatch({ type: "add-favorite", payload: { venue: state.venues[index] } });
  };

  const addTip = (venue, tip) => {
    dispatch({ type: "add-tip", payload: { venue, tip } });
  };

  useEffect(() => {
    getVenues().then((venues) => {
      dispatch({ type: "load-venues", payload: { venues } });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <VenuesContext.Provider
      value={{
        venues: state.venues,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addTip: addTip,
      }}
    >
      {props.children}
    </VenuesContext.Provider>
  );
};

export default VenuesContextProvider;
