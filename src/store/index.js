import { configureStore } from '@reduxjs/toolkit';
import useReducer from './transactionsSlice';

export default configureStore({
  reducer: {
    sideSheet: useReducer,
  },
});
