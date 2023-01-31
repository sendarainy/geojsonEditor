import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as mapReducer, sliceName as mapSliceName } from 'store/map';

export const store = configureStore({
  reducer: combineReducers({ [mapSliceName]: mapReducer }),
});

export type RootState = ReturnType<typeof store.getState>;
