import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const getTransactions = createAsyncThunk('transactions', async () => {
  const response = await api.get('transactions');
  return response.data.transactions;
});

const initialState = {
  transactions: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch(state) {
      state.transactions = {};
    },
  },
  extraReducers: {
    [getTransactions.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, transactions: payload };
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export const selectSearch = (state) => state.search;
export default searchSlice.reducer;
