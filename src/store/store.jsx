import { configureStore } from "@reduxjs/toolkit";
import { authSlice1, adminSlice1 } from "./auth";

const store = configureStore({
  reducer: { auth: authSlice1, adminAuth: adminSlice1 },
});
export default store;
