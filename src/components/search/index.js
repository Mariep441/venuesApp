import React, { Component, useState  } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import data from '../../assets/data';
import Markers from '../mapVenueMarkers';
import "./mapView.css";
import React, { useState } from "react";
import Header from "../headerVenueList";
import MapView from "../mapView";
import FilterControls from "../filterControls";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const VenueMapPageTemplate = ({venues, name, action}) => {
    const [nameFilter, setNameFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("0");
    const category = Number(categoryFilter)
    let displayedVenues = venues
      .filter(v => {
        return v.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })
      .filter(v => {
        return  category > 0
          ? v.category_ids.includes(Number(categoryFilter))
          : true;
      });
  
    const handleChange = (type, value) => {
      if (type === "name") setNameFilter(value);
      else setCategoryFilter(value);
    };


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lat: 49,
        lng: 6.5,
        zoom: 10};
    }
  

  render() {
    const position = [this.state.lat, this.state.lng];





  return (
    <>
      <Header name={name} numVenues={displayedVenues.length} />
      <FilterControls onUserInput={handleChange} numVenues={displayedVenues.length}/>
      <div id="map">
        <Map style={{ height: "75vh" }} center={position} zoom={8}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
         <Markers venues={displayedVenues}/> 
        </Map>
      </div>
    </>
  );
};
};
};

export default VenueMapPageTemplate;
