import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstname: "",
    lastname: "",
    authorizationToken: "",
    isLoggedIn: false,
  },
  reducers: {
    loggin(state, action) {
      const details = action.payload;
      state.firstname = details.firstname;
      state.lastname = details.lastname;
      state.authorizationToken = details.jwt;
      state.isLoggedIn = true;
      localStorage.setItem("jwt", details.jwt);
      localStorage.setItem("loggedIn", "true");
      console.log(details.jwt);
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.authorizationToken = null;
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("jwt");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;