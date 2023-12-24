import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlice from "./slice/breadcrumbSlice";
import appointmentSlice from "./slice/appointmentSlice";

const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbSlice,
    appointmentList: appointmentSlice,
  },
});

export default store;
