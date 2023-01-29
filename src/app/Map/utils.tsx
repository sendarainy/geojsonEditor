import { renderToString } from 'react-dom/server';
import { GeoJSON, Marker, Polygon, DivIcon } from 'leaflet';
import type { LatLngExpression, Map } from 'leaflet';

import { MarkerIcon } from './MarkerIcon';
import styles from './Map.module.scss';

const icon = new DivIcon({
  html: renderToString(<MarkerIcon className={styles.mapMarker} />),
});

export const getLatLngCoordinates = (
  coordinates: [number, number] | [number, number][] | [number, number][][],
  type: string
) => {
  if (type === 'Point')
    return [
      GeoJSON.coordsToLatLng(coordinates as [number, number]),
    ] as LatLngExpression[];
  if (type === 'Polygon')
    return GeoJSON.coordsToLatLngs(coordinates, 1) as LatLngExpression[][];
  if (type === 'MultiPolygon')
    return GeoJSON.coordsToLatLngs(coordinates, 2) as LatLngExpression[][][];
  return undefined;
};

export const processFeature = (feature: GeoJSON.Feature, map: Map) => {
  if (feature.geometry.type === 'MultiPoint') {
    feature.geometry.coordinates.forEach((coords) => {
      new Polygon(
        getLatLngCoordinates(
          coords as
            | [number, number]
            | [number, number][]
            | [number, number][][],
          feature.geometry.type
        ) as [number, number][],
        {
          // color,
          weight: 2,
        }
      ).addTo(map);
    });
  }
  if (feature.geometry.type === 'Polygon') {
    console.log(feature.geometry);
    new Polygon(
      getLatLngCoordinates(
        feature.geometry.coordinates as
          | [number, number]
          | [number, number][]
          | [number, number][][],
        feature.geometry.type
      )!,
      {
        // color,
        weight: 2,
      }
    ).addTo(map);
  }
  if (feature.geometry.type === 'Point') {
    const [lng, lat] = feature.geometry.coordinates;

    new Marker({ lat, lng }, { icon }).addTo(map);
  }
};

export const processFeatureCollection = (
  featureCollection: GeoJSON.FeatureCollection,
  map: Map
) => {
  featureCollection.features.forEach((feature) => {
    processFeature(feature, map);
  });
};
