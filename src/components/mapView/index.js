import React, { Component, Fragment } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "../../globals/fontawesome";
import L from 'leaflet';
import data from '../../assets/data';
import venue from "../mapVenueMarker/";
import VenueList from "../venueList";


const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});



const MarkerPopup = (props) => {
  const { name } = props.data;


  return  (<Popup>
    <div className='popup-text'>{name}</div>
  </Popup>);
};



const Markers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={[venue.location.lat,venue.location.lng]} icon={customMarker} >
      <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};







export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 49,
      lng: 6,
      zoom: 10};
  }



  render() {
    const position = [this.state.lat, this.state.lng];
    
    return (
      <div id="map">
        <Map style={{ height: "100vh" }} center={position} zoom={8}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
         <Markers venues={data.venues}/> 
        </Map>
      </div>
    );
  }
}
