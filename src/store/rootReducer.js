import { combineReducers } from '@reduxjs/toolkit';

// import { searchReducer } from '../features/search';
import sideSheetReducer from '../features/sideSheet/sideSheetSlice';

const rootReducer = combineReducers({
  sideSheet: sideSheetReducer,
});

export default rootReducer;
