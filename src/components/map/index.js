import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./map.css";
import 'leaflet/dist/leaflet.css';
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const icon = new Icon({
  iconUrl: <FontAwesomeIcon icon={["fas", "home"]} size="100x" />
});

export default function App() {
  const [activeVenue, setActiveVenue] = React.useState(null);

  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    
    <Marker position={[45.4, -75.7]}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>


      {activeVenue && (
        <Popup
          position={[
            activeVenue.location.lat,
            activeVenue.location.lng
          ]}
          onClose={() => {
            setActiveVenue(null);
          }}
        >
          <div>
            <h2>{activeVenue.properties.name}</h2>
            <p>{activeVenue.properties.name}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}

