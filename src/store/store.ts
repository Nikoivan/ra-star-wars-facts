import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { factsReducer } from './slices/factsSlice';

const rootReducer = combineReducers({
  facts: factsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState>;
