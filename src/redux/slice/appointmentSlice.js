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
    },
    setSelectedItemId: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
});

export const { setItems, setSelectedItemId } = apiDataSlice.actions;

// Async action to fetch API data
export const fetchApiData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/appointments.json"); // Replace with your actual API endpoint
    console.log(response?.data.appointments);
  } catch (error) {
    // Handle error
    console.error("Error fetching API data:", error);
  }
};

export default apiDataSlice.reducer;
