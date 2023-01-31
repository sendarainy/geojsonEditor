import { useCallback } from 'react';
import type { ChangeEvent } from 'react';
import type {} from 'leaflet';
import { useMap } from 'react-leaflet';

import { ReactComponent as UploadIcon } from 'assets/upload-icon.svg';

import { processFeature, processFeatureCollection } from '../utils';

import styles from './MapControls.module.scss';

export const UploadControl = () => {
  const map = useMap();

  const onUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader();

      const onReaderLoad = () => {
        const geoJson: GeoJSON.Feature | GeoJSON.FeatureCollection = JSON.parse(
          reader.result as string
        );

        if (geoJson.type === 'Feature') {
          processFeature(geoJson, map);
        }

        if (geoJson.type === 'FeatureCollection') {
          processFeatureCollection(geoJson, map);
        }
      };

      reader.onload = onReaderLoad;

      if (e.currentTarget.files?.length) {
        reader.readAsText(e.currentTarget.files[0]);
      }
    },
    [map]
  );

  return (
    <div
      className={styles.mapControls_section}
      role="button"
      title="Upload geoJSON"
    >
      <label
        htmlFor="upload"
        className={styles.mapControls_item}
        title="Upload GeoJSON"
      >
        <UploadIcon />
        <input
          id="upload"
          name="upload"
          hidden
          accept=".json,.geojson"
          type="file"
          onChange={onUpload}
        />
      </label>
    </div>
  );
};
