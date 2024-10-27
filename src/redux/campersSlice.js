import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

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
    page: 1
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.total = 0;
    },
    incrementPage: (state) => {
      state.page += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;
        if (state.page > 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  }
});

export const { resetCampers, incrementPage } = campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectTotal = (state) => state.campers.total;
export const selectPage = (state) => state.campers.page;

export const selectFilteredContacts = createSelector(
  [selectCampers, (state) => state.filters.name],
  (campers, nameFilter) =>
    campers.filter((camper) => camper.name.toLowerCase().includes(nameFilter.toLowerCase()))
);

export default campersSlice.reducer;
