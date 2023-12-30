import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiDataSlice = createSlice({
  name: "appointmentData",
  initialState: {
    items: [],
    selectedItemId: null,
    loading: false, // Add a loading state
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setSelectedItemId: (state, action) => {
      state.selectedItemId = action.payload;
      // console.log(action);
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setItems, setSelectedItemId, isLoading } = apiDataSlice.actions;
export default apiDataSlice.reducer;
