import React, { useContext } from "react";
import {VenuesContext} from '../contexts/venuesContext'
import { Map, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Markers from '../components/mapVenueMarkers';

const VenueMapPage = () => {
  const context = useContext(VenuesContext);

  return (
    <div id="map">
      <Map style={{ height: "90vh" }} center={[49.611637, 6.1302385]} zoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       <Markers venues = {context.venues}/> 

      </Map>
    </div>
  );
}

export default VenueMapPage;
