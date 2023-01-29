import { ReactComponent as Icon } from './drop-icon.svg';

interface DropIconProps {
  color?: string;
  className?: string;
}

export const MarkerIcon = ({ color, className }: DropIconProps) => (
  <Icon style={{ color }} className={className} />
);
