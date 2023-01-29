import { ReactComponent as DrawIcon } from 'assets/draw-icon.svg';
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg';
import { ReactComponent as MergeIcon } from 'assets/merge-icon.svg';
import { ReactComponent as CutIcon } from 'assets/cut-icon.svg';
import { ReactComponent as DragIcon } from 'assets/drag-icon.svg';
import { ReactComponent as RemoveIcon } from 'assets/remove-icon.svg';

import { DrawControlsButton } from './DrawControlsButton';
import styles from './DrawControls.module.scss';

export const DrawControls = () => {
  return (
    <div className={styles.drawControls_container}>
      <DrawControlsButton type="draw" icon={DrawIcon} />
      <DrawControlsButton type="edit" icon={EditIcon} />
      <DrawControlsButton type="merge" icon={MergeIcon} />
      <DrawControlsButton type="cut" icon={CutIcon} />
      <DrawControlsButton type="drag" icon={DragIcon} />
      <DrawControlsButton type="remove" icon={RemoveIcon} />
    </div>
  );
};
