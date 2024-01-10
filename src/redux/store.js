import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlice from "./slice/breadcrumbSlice";
import appointmentSlice from "./slice/appointmentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  breadcrumb: breadcrumbSlice,
  appointmentList: appointmentSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});

export const persistor = persistStore(store);
