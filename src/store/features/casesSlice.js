import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://covid-api.mmediagroup.fr/v1/cases/';
const getCasesByContinent = createAsyncThunk('/cases/continent', async () => {
  const { data } = await axios.get(`${baseURL}?continent=europe`);
  return data;
});

export const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    cases: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCasesByContinent.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCasesByContinent.fulfilled, (state, action) => {
      state.status = 'success';
      state.cases = action.payload;
    });
    builder.addCase(getCasesByContinent.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default casesSlice.reducer;
