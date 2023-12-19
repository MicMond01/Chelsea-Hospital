import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlice from "./slice/breadcrumbSlice";

const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbSlice,
  },
});

export default store;
