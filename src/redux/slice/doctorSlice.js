import { createSlice } from "@reduxjs/toolkit";

const apiDoctorSlice = createSlice({
  name: "doctorData",
  initialState: {
    items: [],
    selectedDoctorId: null,
    loading: false, // Add a loading state
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    selectedDoctorId: (state, action) => {
      state.selectedItemId = action.payload;
      // console.log(action);
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setItems, selectedDoctorId, isLoading } = apiDoctorSlice.actions;
export default apiDoctorSlice.reducer;
