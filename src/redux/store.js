import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./slice/buttonSlice";

const store = configureStore({
  reducer: {
    button: buttonSlice,
  },
});

export default store;
