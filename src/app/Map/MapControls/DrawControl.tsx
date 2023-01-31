import { /*useCallback,*/ useState } from 'react';

import { ReactComponent as DrawIcon } from 'assets/draw-icon.svg';
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg';
import { ReactComponent as MergeIcon } from 'assets/merge-icon.svg';
import { ReactComponent as CutIcon } from 'assets/cut-icon.svg';
import { ReactComponent as DragIcon } from 'assets/drag-icon.svg';
import { ReactComponent as RemoveIcon } from 'assets/remove-icon.svg';

import { ActionType } from '../types';

import { DrawControlButton } from './DrawControlButton';

import styles from './MapControls.module.scss';

export const DrawControl = () => {
  const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);

  // const onClick = useCallback(() => {}, []);

  return (
    <div className={styles.mapControls_section}>
      <DrawControlButton
        title="Draw Polygon"
        action={ActionType.DRAW}
        icon={DrawIcon}
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <DrawControlButton
        title="Edit Mode"
        action={ActionType.EDIT}
        icon={EditIcon}
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <DrawControlButton
        title="Merge Mode"
        action={ActionType.MERGE}
        icon={MergeIcon}
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <DrawControlButton
        title="Cut Mode"
        action={ActionType.CUT}
        icon={CutIcon}
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <DrawControlButton
        title="Drag Mode"
        action={ActionType.DRAG}
        icon={DragIcon}
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <DrawControlButton
        title="Remove mode"
        action={ActionType.REMOVE}
        icon={RemoveIcon}
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
    </div>
  );
};
