// import { useCallback } from 'react';

import { ReactComponent as DrawIcon } from 'assets/draw-icon.svg';
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg';
import { ReactComponent as MergeIcon } from 'assets/merge-icon.svg';
import { ReactComponent as CutIcon } from 'assets/cut-icon.svg';
import { ReactComponent as DragIcon } from 'assets/drag-icon.svg';
import { ReactComponent as RemoveIcon } from 'assets/remove-icon.svg';

import { ActionType } from '../types';

import { DrawControlButton } from './DrawControlButton';

import styles from './MapControls.module.scss';
import { memo } from 'react';

export const DrawControl = memo(() => {
  // const onClick = useCallback(() => {}, []);

  return (
    <div className={styles.mapControls_section}>
      <DrawControlButton
        title="Draw Polygon"
        action={ActionType.DRAW}
        icon={DrawIcon}
      />
      <DrawControlButton
        title="Edit Mode"
        action={ActionType.EDIT}
        icon={EditIcon}
      />
      <DrawControlButton
        title="Merge Mode"
        action={ActionType.MERGE}
        icon={MergeIcon}
      />
      <DrawControlButton
        title="Cut Mode"
        action={ActionType.CUT}
        icon={CutIcon}
      />
      <DrawControlButton
        title="Drag Mode"
        action={ActionType.DRAG}
        icon={DragIcon}
      />
      <DrawControlButton
        title="Remove mode"
        action={ActionType.REMOVE}
        icon={RemoveIcon}
      />
    </div>
  );
});
