import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMap } from 'react-leaflet';

import { select } from 'store/map';

import { ReactComponent as DrawIcon } from 'assets/draw-icon.svg';
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg';
// import { ReactComponent as MergeIcon } from 'assets/merge-icon.svg';
import { ReactComponent as CutIcon } from 'assets/cut-icon.svg';
import { ReactComponent as DragIcon } from 'assets/drag-icon.svg';
import { ReactComponent as RemoveIcon } from 'assets/remove-icon.svg';

import { ActionType } from '../types';
import { enableDraw, enableCut } from '../utils';

import { DrawControlButton } from './DrawControlButton';

import styles from './MapControls.module.scss';

export const DrawControl = memo(() => {
  const dispatch = useDispatch();
  const map = useMap();

  const selectedAction = useSelector(select.selectedAction);

  useEffect(() => {
    switch (selectedAction) {
      case ActionType.DRAW: {
        enableDraw(map, dispatch);
        break;
      }
      case ActionType.EDIT: {
        map.pm.enableGlobalEditMode({ limitMarkersToCount: 3 });
        break;
      }
      // case ActionType.MERGE: {
      //   break;
      // }
      case ActionType.CUT: {
        enableCut(map, dispatch);
        break;
      }
      case ActionType.DRAG: {
        map.pm.enableGlobalDragMode();
        break;
      }
      case ActionType.REMOVE: {
        map.pm.enableGlobalRemovalMode();
        break;
      }

      default:
        break;
    }
  }, [dispatch, map, selectedAction]);

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
      {/* <DrawControlButton
        title="Merge Mode"
        action={ActionType.MERGE}
        icon={MergeIcon}
      /> */}
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
