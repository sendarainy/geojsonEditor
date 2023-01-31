import { mapSlice } from './slice';

export const { reducer, actions, name: sliceName } = mapSlice;
export * as select from './selectors';
