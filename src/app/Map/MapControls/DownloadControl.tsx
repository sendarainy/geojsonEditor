import { useCallback } from 'react';
import { Marker, Polygon } from 'leaflet';
import { useMap } from 'react-leaflet';
import download from 'js-file-download';

import { ReactComponent as DownloadIcon } from 'assets/download-icon.svg';

import styles from './MapControls.module.scss';

export const DownloadControl = () => {
  const map = useMap();

  const onDownload = useCallback(() => {
    const layers = map.pm.getGeomanLayers() as (Polygon | Marker)[];

    const features = layers.map((l) => {
      const properties = l.options;
      const feature = {
        ...l.toGeoJSON(),
        properties,
      };
      return feature;
    });

    if (features.length > 1) {
      const featureCollection = {
        type: 'FeatureCollection',
        features,
      };
      download(JSON.stringify(featureCollection), 'FeatureCollection.json');
    }

    if (features.length === 1) {
      download(JSON.stringify(features[0]), 'Feature.json');
    }
  }, [map]);

  return (
    <div
      className={styles.mapControls_section}
      role="button"
      title="Download geoJSON"
    >
      <div onClick={onDownload} className={styles.mapControls_item}>
        <DownloadIcon />
      </div>
    </div>
  );
};
