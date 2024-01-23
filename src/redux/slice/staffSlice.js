import { createSlice } from "@reduxjs/toolkit";

const apiStaffSlice = createSlice({
  name: "staffData",
  initialState: {
    staffItem: [],
    selectedStaffId: null,
    loading: false,
  },

  reducers: {
    setStaffItem: (state, action) => {
      state.staffItem = action.payload;
      state.loading = false;
    },
    setSelectedStaffId: (state, action) => {
      state.selectedStaffId = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setStaffItem, setSelectedStaffId, isLoading } =
  apiStaffSlice.actions;

export default apiStaffSlice.reducer;
