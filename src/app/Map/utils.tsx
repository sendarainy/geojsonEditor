import { renderToString } from 'react-dom/server';
import { Dispatch } from '@reduxjs/toolkit';
import { GeoJSON, Marker, Polygon, DivIcon } from 'leaflet';
import type { LatLngExpression, Map } from 'leaflet';

import { actions } from 'store/map';

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
      const polygon = new Polygon(
        getLatLngCoordinates(
          coords as
            | [number, number]
            | [number, number][]
            | [number, number][][],
          feature.geometry.type
        ) as [number, number][],
        {
          ...feature.properties,
          // weight: 2,
        }
      );
      // polygon.on('click', () => {
      //   disableGeoman(map);
      //   if (polygon.pm.enabled()) {
      //     polygon.pm.disable();
      //     return;
      //   }
      //   polygon.pm.enable({ limitMarkersToCount: 3 });
      // });
      polygon.addTo(map);
    });
  }
  if (feature.geometry.type === 'Polygon') {
    const polygon = new Polygon(
      getLatLngCoordinates(
        feature.geometry.coordinates as
          | [number, number]
          | [number, number][]
          | [number, number][][],
        feature.geometry.type
      )!,
      {
        ...feature.properties,
        // weight: 2,
      }
    );
    // polygon.on('click', () => {
    //   disableGeoman(map);
    //   polygon.pm.enable({ limitMarkersToCount: 3 });
    // });
    polygon.addTo(map);
  }
  if (feature.geometry.type === 'Point') {
    const [lng, lat] = feature.geometry.coordinates;

    const marker = new Marker({ lat, lng }, { ...feature.properties, icon });
    // marker.on('click', () => {
    //   disableGeoman(map);
    //   marker.pm.enable();
    // });
    marker.addTo(map);
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

export const enableDrawPolygon = (map: Map, dispatch: Dispatch) => {
  map.pm.enableDraw('Polygon');
  map.on('pm:create', () => {
    dispatch(actions.setSelectedAction(null));
  });
};

export const enableDrawPoint = (map: Map) => {
  map.pm.enableDraw('Marker', { markerStyle: { icon } });
};

export const enableCut = (map: Map, dispatch: Dispatch) => {
  map.pm.enableGlobalCutMode();
  map.on('pm:cut', () => {
    dispatch(actions.setSelectedAction(null));
  });
};

export const disableGeoman = (map: Map) => {
  map.pm.disableDraw();
  map.pm.disableGlobalEditMode();
  map.pm.disableGlobalDragMode();
  map.pm.disableGlobalCutMode();
  map.pm.disableGlobalRemovalMode();

  map.off('pm:create');
  map.off('pm:remove');
  map.off('pm:cut');
  map.off('mouseup');
};
