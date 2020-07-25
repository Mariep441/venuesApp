import { useEffect, useState } from "react";
import {getVenue} from '../api/foursquare-api'

const useVenue = id => {
  const [venue, setVenue] = useState(null);
  useEffect(() => {
    getVenue(id).then(venue => {
      setVenue(venue);
    });
  }, [id]);
  return [venue, setVenue];
};

export default useVenue