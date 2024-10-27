import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import EquipmentType from '../models/enums/EquipmentType.enum';
import VehicleTypeEnum from '../models/enums/VehicleType.enum';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const campers = state.campers;
    const filters = state.filters;

    const equipmentParams = filters.equipment
      .map((item) => {
        if (item === EquipmentType.Automatic) {
          return 'transmission=automatic';
        }

        return `${item}=true`;
      })
      .join('&');

    const params = {
      page: campers.page,
      limit: campers.itemsPerLoad,
      ...(filters.location && { location: filters.location }),
      ...(filters.form && {
        form: filters.form === VehicleTypeEnum.Van ? 'panelTruck' : filters.form.replace(' ', '')
      })
    };

    const response = await axios.get('', {
      params,
      paramsSerializer: (params) => {
        const queryString = new URLSearchParams(params).toString();
        return equipmentParams ? `${queryString}&${equipmentParams}` : queryString;
      }
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCamperById = createAsyncThunk('campers/fetchById', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});
