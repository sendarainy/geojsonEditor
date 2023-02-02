import { useEffect, useRef, memo } from 'react';
import { DomEvent } from 'leaflet';

import { ZoomControl } from './ZoomControl';
import { DrawControl } from './DrawControl';
import { UploadControl } from './UploadControl';
import { DownloadControl } from './DownloadControl';

import styles from './MapControls.module.scss';

export const MapControls = memo(() => {
  const mapControlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapControlsRef.current) {
      DomEvent.disableClickPropagation(mapControlsRef.current);
    }
  });
  return (
    <div ref={mapControlsRef} className={styles.mapControls_container}>
      <ZoomControl />
      <DrawControl />
      <UploadControl />
      <DownloadControl />
    </div>
  );
});
