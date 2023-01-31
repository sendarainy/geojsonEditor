import { memo } from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

import { MapControls } from './MapControls';

import styles from './Map.module.scss';

const POSITION: LatLngExpression = [51.505, -0.09];
const TILE_URL =
  'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxleGV5a296bG92IiwiYSI6ImNrZHU1MWUzNDFvd3Ayc29kZm92YTFybWoifQ.W5PD-0wH0fsvpmxFPDJ5pA';

export const Map = memo(() => {
  return (
    <MapContainer
      /**
       * leaflet-geoman vertexes don't inherit a polygon color,
       * so pass the color of selected polygon and then inherit it with scss
       */
      // TODO
      // style={{ borderColor: selectedPolygon }}
      zoom={13}
      center={POSITION}
      zoomControl={false}
      className={styles.map}
    >
      <TileLayer url={TILE_URL} />
      <MapControls />
    </MapContainer>
  );
});
