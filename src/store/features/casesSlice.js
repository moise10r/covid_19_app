import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://covid-api.mmediagroup.fr/v1/cases/';

export const getAllCases = createAsyncThunk('/cases/continent', async () => {
  const { data } = await axios.get(`${baseURL}?continent=europe`);
  const countryValues = Object.values(data);
  const allCountries = countryValues.map((country) => country.All);
  const filteredCountry = allCountries.map((c) => ({ confirmed: c.confirmed, country: c.country }));
  return filteredCountry;
});

export const getCasesBySingleContinent = createAsyncThunk('/cases/continent', async () => {
  const { data } = await axios.get(`${baseURL}?continent=europe`);
  const countryValues = Object.values(data);
  const allCountries = countryValues.map((country) => country.All);
  const filteredCountry = allCountries.map((c) => ({ confirmed: c.confirmed, country: c.country }));
  return filteredCountry;
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
  },
});

export default casesSlice.reducer;
