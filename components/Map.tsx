import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

// Set default icon URLs
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import marketIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Set default icon URLs
L.Marker.prototype.options.icon = L.icon({
  iconUrl: marketIcon.src as string,
  iconRetinaUrl: markerIcon2x.src as string,
  shadowUrl: markerShadow.src as string,
});


interface MapProps {
  center?: L.LatLngExpression;
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={center || [52, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className={`h-full rounded-lg`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && <Marker position={center} />}
    </MapContainer>
  );
};

export default Map;
