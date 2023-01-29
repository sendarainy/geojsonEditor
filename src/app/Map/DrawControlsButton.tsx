import type { JSXElementConstructor } from 'react';
import styles from './DrawControls.module.scss';

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

export const DrawControlsButton = ({ icon }: Props) => {
  const IconComponent = icon;
  return (
    <div className={styles.mapDrawControls_buttonContainer}>
      <div className={styles.mapDrawControls_button}>
        <IconComponent />
      </div>
    </div>
  );
};
