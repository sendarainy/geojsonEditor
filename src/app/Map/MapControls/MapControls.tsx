import { ZoomControl } from './ZoomControl';
import { DrawControl } from './DrawControl';
import { UploadControl } from './UploadControl';
import { DownloadControl } from './DownloadControl';

import styles from './MapControls.module.scss';

export const MapControls = () => {
  return (
    <div className={styles.mapControls_container}>
      <ZoomControl />
      <DrawControl />
      <UploadControl />
      <DownloadControl />
    </div>
  );
};
