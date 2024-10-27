import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import campersReducer from './campersSlice';

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
