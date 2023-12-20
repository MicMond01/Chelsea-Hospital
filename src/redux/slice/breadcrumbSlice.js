import { createSlice } from "@reduxjs/toolkit";

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState: {
    breadcrumbTitle: null,
    formattedDynamicPath: null,
  },
  reducers: {
    setbreadcrumb: (state, action) => {
      state.breadcrumbTitle = action.payload.breadcrumbTitle;
      state.formattedDynamicPath = action.payload.formattedDynamicPath;
    },
  },
});

export const { setbreadcrumb } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
