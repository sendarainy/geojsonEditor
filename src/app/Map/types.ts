export interface MultiPolygon {
  type: 'MultiPolygon';
  // coordinates: [number, number] | [number, number][] | [number, number][][];
  coordinates: [number, number][] | [number, number][][];
}
