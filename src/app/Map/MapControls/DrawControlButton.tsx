import { useCallback, useMemo } from 'react';
import type { JSXElementConstructor, Dispatch, SetStateAction } from 'react';
import { useMap } from 'react-leaflet';
import cn from 'clsx';

import { ActionType } from '../types';
import { disableGeoman } from '../utils';

import styles from './MapControls.module.scss';

interface Props {
  icon: JSXElementConstructor<{ title?: string }>;
  action: ActionType;
  title: string;
  selectedAction: ActionType | null;
  setSelectedAction: Dispatch<SetStateAction<ActionType | null>>;
  // cancelHandler: () => void;
  // onClickHandler: (mode: string) => () => void;
  // lastActionCancelHandler: (selectedMode: 'Polygon' | 'Cut') => () => void;
  // polygonsToMerge?: GeomanLayer[];
  // mergePolygons?: () => void;
}

export const DrawControlButton = ({
  icon,
  title,
  action,
  selectedAction,
  setSelectedAction,
}: Props) => {
  const map = useMap();

  const isActive = useMemo(
    () => selectedAction === action,
    [selectedAction, action]
  );

  const onClick = useCallback(() => {
    disableGeoman(map);

    if (selectedAction === action) {
      setSelectedAction(null);
      return;
    } else {
      setSelectedAction(action);
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
        break;
      }

      default:
        break;
    }
  }, [setSelectedAction, map, action, selectedAction]);

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
