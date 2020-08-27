import React from "react";
import "../../globals/fontawesome";
import L from 'leaflet';


export const VenueLocationIcon = new L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        className: 'leaflet-venue-icon'
      });
