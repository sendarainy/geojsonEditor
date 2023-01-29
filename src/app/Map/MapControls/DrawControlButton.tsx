import type { JSXElementConstructor } from 'react';
import styles from './MapControls.module.scss';

interface Props {
  icon: JSXElementConstructor<{ title?: string }>;
  type: string;
  // selectedMode: string | null;
  // cancelHandler: () => void;
  // onClickHandler: (mode: string) => () => void;
  // lastActionCancelHandler: (selectedMode: 'Polygon' | 'Cut') => () => void;
  // polygonsToMerge?: GeomanLayer[];
  // mergePolygons?: () => void;
}

export const DrawControlButton = ({ icon }: Props) => {
  const IconComponent = icon;
  return (
    <div className={styles.mapControls_item}>
      <IconComponent />
    </div>
  );
};
