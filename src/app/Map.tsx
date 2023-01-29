import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

const POSITION: LatLngExpression = [51.505, -0.09];
const TILE_URL =
  'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxleGV5a296bG92IiwiYSI6ImNrZHU1MWUzNDFvd3Ayc29kZm92YTFybWoifQ.W5PD-0wH0fsvpmxFPDJ5pA';

export const Map = () => {
  return (
    <MapContainer zoom={13} center={POSITION} zoomControl={false}>
      <TileLayer url={TILE_URL} />
      <ZoomControl position="topright" />
    </MapContainer>
  );
};
