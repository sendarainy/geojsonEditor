import type { LatLngExpression, Layer } from 'leaflet';

export interface MultiPolygon {
  type: 'MultiPolygon';
  // coordinates: [number, number] | [number, number][] | [number, number][][];
  coordinates: [number, number][] | [number, number][][];
}

export interface GeomanLayerStyleObject {
  color?: string;
  weight?: number;
  fillColor?: string;
  fillOpacity?: number;
  pmIgnore?: boolean;
}

export interface GeomanLayer extends Layer {
  options: {
    id: number;
    className: string;
    color: string;
    draggable: boolean;
    pane: string;
  };
  _latlngs: LatLngExpression[];
  _leaflet_id: number;
  feature: {
    geometry: {
      type: string;
      coordinates: [number, number] | [number, number][];
    };
  };
  setStyle: (arg: GeomanLayerStyleObject) => void;
}
