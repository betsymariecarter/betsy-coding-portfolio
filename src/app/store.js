import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../auth/authSlice";
import allWebsitesSlice from "../pages/websites/allWebsitesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    websites: allWebsitesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../auth/authSlice";