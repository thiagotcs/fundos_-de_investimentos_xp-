import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'SideSheet',
  initialState: {
    changeSideSheet: false,
    changeSideSheetEdit: false,
  },
  reducers: {
    openSideSheet(state) {
      state.changeSideSheet = true;
    },
    closeSideSheet(state) {
      state.changeSideSheet = false;
    },
    openSideSheetEdit(state) {
      state.changeSideSheetEdit = true;
    },
    closeSideSheetEdit(state) {
      state.changeSideSheetEdit = false;
    },
  },
});

export const {
  openSideSheet,
  openSideSheetEdit,
  closeSideSheet,
  closeSideSheetEdit,
} = slice.actions;

export const selectSideSheet = (state) => state.sideSheet;

export default slice.reducer;
