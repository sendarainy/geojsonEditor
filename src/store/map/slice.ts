import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { ActionType } from 'types/map';

import { ReducerState } from './types';

const initialState: ReducerState = {
  selectedAction: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSelectedAction(state, action: PayloadAction<ActionType | null>) {
      state.selectedAction = action.payload;
    },
  },
});
