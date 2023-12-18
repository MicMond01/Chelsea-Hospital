import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    value: null,
  },
  reducers: {
    setButtonValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setButtonValue } = buttonSlice.actions;
export default buttonSlice.reducer;
