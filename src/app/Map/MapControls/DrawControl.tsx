import { ReactComponent as DrawIcon } from 'assets/draw-icon.svg';
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg';
import { ReactComponent as MergeIcon } from 'assets/merge-icon.svg';
import { ReactComponent as CutIcon } from 'assets/cut-icon.svg';
import { ReactComponent as DragIcon } from 'assets/drag-icon.svg';
import { ReactComponent as RemoveIcon } from 'assets/remove-icon.svg';

import { DrawControlButton } from './DrawControlButton';

import styles from './MapControls.module.scss';

export const DrawControl = () => {
  return (
    <div className={styles.mapControls_section}>
      <DrawControlButton type="draw" icon={DrawIcon} />
      <DrawControlButton type="edit" icon={EditIcon} />
      <DrawControlButton type="merge" icon={MergeIcon} />
      <DrawControlButton type="cut" icon={CutIcon} />
      <DrawControlButton type="drag" icon={DragIcon} />
      <DrawControlButton type="remove" icon={RemoveIcon} />
    </div>
  );
};
