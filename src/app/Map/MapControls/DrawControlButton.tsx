import { useCallback, useMemo } from 'react';
import type { JSXElementConstructor } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMap } from 'react-leaflet';
import cn from 'clsx';

import { ActionType } from '../types';
import { disableGeoman } from '../utils';

import styles from './MapControls.module.scss';

import { actions, select } from 'store/map';
import { Polygon } from 'leaflet';

interface Props {
  icon: JSXElementConstructor<{ title?: string }>;
  action: ActionType;
  title: string;
  // cancelHandler: () => void;
  // onClickHandler: (mode: string) => () => void;
  // lastActionCancelHandler: (selectedMode: 'Polygon' | 'Cut') => () => void;
  // polygonsToMerge?: GeomanLayer[];
  // mergePolygons?: () => void;
}

export const DrawControlButton = ({ icon, title, action }: Props) => {
  const dispatch = useDispatch();
  const map = useMap();

  const selectedAction = useSelector(select.selectedAction);

  const isActive = useMemo(
    () => selectedAction === action,
    [selectedAction, action]
  );

  const onClick = useCallback(() => {
    disableGeoman(map);

    if (selectedAction === action) {
      dispatch(actions.setSelectedAction(null));
      return;
    } else {
      dispatch(actions.setSelectedAction(action));
    }

    switch (action) {
      case ActionType.DRAW: {
        break;
      }
      case ActionType.EDIT: {
        map.pm.enableGlobalEditMode({ limitMarkersToCount: 3 });
        break;
      }
      case ActionType.CUT: {
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
  }, [dispatch, action, map, selectedAction]);

  const IconComponent = icon;

  return (
    <div
      role="button"
      className={cn(styles.mapControls_item, {
        [styles.mapControls_itemActive]: isActive,
      })}
      title={title}
      onClick={onClick}
    >
      <IconComponent />
    </div>
  );
};
