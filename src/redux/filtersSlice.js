import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    equipment: []
  },
  reducers: {
    changeLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    changeFormFilter: (state, action) => {
      state.form = action.payload;
    },
    changeEquipmentsFilter: (state, action) => {
      state.equipment = action.payload;
    },
    resetFilters: (state) => {
      state.location = '';
      state.form = '';
      state.equipment = [];
    }
  }
});

export const { changeLocationFilter, changeFormFilter, changeEquipmentsFilter, resetFilters } =
  filtersSlice.actions;
export const selectLocationFilter = (state) => state.filters.location;
export const selectFormFilter = (state) => state.filters.form;
export const selectEquipmentFilter = (state) => state.filters.equipment;

export default filtersSlice.reducer;
