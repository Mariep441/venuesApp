import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import {Marker,Popup} from 'react-leaflet';
import {VenueLocationIcon} from '../mapLocationIcon';


const VenueMarkers = ({venues, action}) => {
  
  const markers = venues.map(venue => (
    <Marker key={venue.id} venue={venue} position={[venue.location.lat,venue.location.lng]} icon={VenueLocationIcon} action={action} >
        <Popup>
          
          <img src={`${venue.categories[0].icon.prefix}32${venue.categories[0].icon.suffix}`}/>
          <Link to={`/venues/${venue.id}`}>{venue.name}</Link>

        </Popup>
         
    </Marker>
    ));
    return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;



