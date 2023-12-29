import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type AllowedValues = number | string;

export type FactsState = {
  value: AllowedValues;
};

const initialValue = '';

const initialState: FactsState = {
  value: initialValue,
};

export const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<AllowedValues>) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = initialValue;
    },
  },
});

export const factsActions = factsSlice.actions;
export const factsReducer = factsSlice.reducer;
export const counterSelector = (state: RootState) => state.facts.value;
