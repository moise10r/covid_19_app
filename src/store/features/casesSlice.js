/* eslint-disable max-len */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://covid-api.mmediagroup.fr/v1/cases/';

export const getAllCases = createAsyncThunk('/cases/continent', async () => {
  const { data } = await axios.get(`${baseURL}?continent=europe`);
  const countryValues = Object.values(data).map((country) => country.All);
  const allCountries = countryValues.map((c) => ({ confirmed: c.confirmed, country: c.country }));
  return allCountries;
});

export const getCountryCases = createAsyncThunk('/cases/country', async (country) => {
  const { data } = await axios.get(`${baseURL}?country=${country}`);
  return data;
});

const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    cases: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCases.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getAllCases.fulfilled, (state, action) => {
      state.status = 'success';
      state.cases = action.payload;
    });
    builder.addCase(getAllCases.rejected, (state) => {
      state.status = 'failed';
    });

    builder.addCase(getCountryCases.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCountryCases.fulfilled, (state, action) => {
      const { All } = action.payload;
      state.status = 'success';
      const filteredState = state.cases.filter(({ country }) => country !== All.country);
      console.log('length', Object.keys(action.payload).length);
      if (Object.keys(action.payload).length === 1) {
        state.cases = [...filteredState].concat(Object.values(action.payload));
      }
      Object.entries(action.payload).forEach(([key, value]) => {
        console.log('value', value);
        if (key === 'All') {
          state.cases = [...filteredState].concat({
            ...value,
          });
        } else {
          state.cases = [...filteredState].concat({
            country: key,
            ...value,
          });
        }
      });

      // const countryValue = Object.values(action.payload);
      // const { All } = action.payload;
      // state.status = 'success';
      // const filteredState = state.cases.filter(({ country }) => country !== All.country);
      // state.cases = [...filteredState].concat(countryValue);
    });
    builder.addCase(getCountryCases.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default casesSlice.reducer;
