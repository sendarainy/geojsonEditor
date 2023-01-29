import { useCallback } from 'react';
import type { ChangeEvent } from 'react';
// import { useMap } from 'react-leaflet';
import { ReactComponent as UploadIcon } from 'assets/upload-icon.svg';

import styles from './MapControls.module.scss';

export const UploadControl = () => {
  // const map = useMap();

  const onUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    const onReaderLoad = () => {
      const json = JSON.parse(reader.result as string);
      console.log(json);
    };

    reader.onload = onReaderLoad;

    if (e.currentTarget.files?.length) {
      reader.readAsText(e.currentTarget.files[0]);
    }
  }, []);

  return (
    <div className={styles.mapControls_section}>
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
