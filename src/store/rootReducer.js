import { combineReducers } from '@reduxjs/toolkit';

import sideSheetReducer from '../features/sideSheet/sideSheetSlice';
import searchReducer from '../features/search/searchSlice';

const rootReducer = combineReducers({
  sideSheet: sideSheetReducer,
  search: searchReducer,
});

export default rootReducer;
