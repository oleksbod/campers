import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import campersReducer from './campersSlice';

const loadFavorites = () => {
  try {
    const favorites = localStorage.getItem('myFavorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Failed to load favorites from localStorage:', error);
    return [];
  }
};

const preloadedState = {
  campers: {
    items: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    itemsPerLoad: 10,
    myFavorites: loadFavorites()
  }
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  preloadedState
});

store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem('myFavorites', JSON.stringify(state.campers.myFavorites));
  } catch (error) {
    console.error('Failed to save favorites to localStorage:', error);
  }
});
