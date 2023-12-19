import { createSlice } from "@reduxjs/toolkit";

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState: {
    value: null,
  },
  reducers: {
    setbreadcrumbtitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setbreadcrumbtitle } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
