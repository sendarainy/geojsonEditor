import { useCallback } from 'react';
import { useMap } from 'react-leaflet';
import styles from './MapControls.module.scss';
export const ZoomControl = () => {
  const map = useMap();

  const zoomIn = useCallback(() => {
    map.zoomIn();
  }, [map]);
  const zoomOut = useCallback(() => {
    map.zoomOut();
  }, [map]);
  return (
    <div className={styles.mapControls_section}>
      <div onClick={zoomIn} className={styles.mapControls_item}>
        +
      </div>
      <div onClick={zoomOut} className={styles.mapControls_item}>
        -
      </div>
    </div>
  );
};
