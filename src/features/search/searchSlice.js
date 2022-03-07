import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const getTransactions = createAsyncThunk('transactions', async () => {
  const response = await api.get('transactions');
  return response.data.transactions;
});

const initialState = {
  transactions: [],
  transactionsContainer: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    filteredTransactions: (state, action) => {
      state.transactions = state.transactionsContainer.filter((transaction) =>
        transaction.name.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: {
    [getTransactions.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      state.transactions = payload;
      state.transactionsContainer = payload;
    },
  },
});

export const { changeSearch, filteredTransactions } = searchSlice.actions;
export const selectSearch = (state) => state.search;
export default searchSlice.reducer;
