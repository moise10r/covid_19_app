import { configureStore } from '@reduxjs/toolkit';
import reducer from './features/casesSlice';

const store = configureStore({
  reducer,
});

export default store;
