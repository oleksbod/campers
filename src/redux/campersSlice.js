import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './campersOps';

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    itemsPerLoad: 10,
    myFavorites: [],
    selectedCamper: null
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.selectedCamper = null;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    addFavorite: (state, action) => {
      if (!state.myFavorites.includes(action.payload)) {
        state.myFavorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.myFavorites = state.myFavorites.filter((id) => id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;

        const existingItemsMap = state.items.reduce((map, item) => {
          map[item.id] = item;
          return map;
        }, {});

        const updatedItems = action.payload.items.map((newItem) => {
          if (existingItemsMap[newItem.id]) {
            return { ...existingItemsMap[newItem.id], ...newItem };
          }

          return newItem;
        });

        state.items = [
          ...Object.values(existingItemsMap),
          ...updatedItems.filter((item) => !existingItemsMap[item.id])
        ];

        state.loading = false;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  }
});

export const { resetCampers, incrementPage, resetPage, addFavorite, removeFavorite } =
  campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectTotal = (state) => state.campers.total;
export const selectPage = (state) => state.campers.page;
export const selectItemsPerLoad = (state) => state.campers.itemsPerLoad;
export const selectMyFavorites = (state) => state.campers.myFavorites;
export const selectCamper = (state) => state.campers.selectedCamper;

export default campersSlice.reducer;
