import { createSlice } from "@reduxjs/toolkit";

// const fetchById = createAsyncThunk("", async () => {
//   const response = await fetch("", {});
//   return response.data;
// });

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    firstname: "",
    lastname: "",
    othername: "",
    authorizationToken: "",
    refreshToken: "",
    roles: [],
    isLoggedIn: false,
  },
  reducers: {
    loggin(state, action) {
      const details = action.payload;
      state.id = details.id;
      state.firstname = details.firstname;
      state.lastname = details.lastname;
      state.othername = details.othername;
      state.authorizationToken = details.token;
      state.refreshToken = details.refreshToken;
      state.roles.push(details.roles);
      state.isLoggedIn = true;
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
export const authSlice1 = authSlice.reducer;

const adminSlice = createSlice({
  name: "adminAuth",
  initialState: {
    id: "",
    firstname: "",
    lastname: "",
    othername: "",
    authorizationToken: "",
    refreshToken: "",
    roles: [],
    isLoggedIn: false,
  },
  reducers: {
    loggin(state, action) {
      const details = action.payload;
    },
  },
});

export const adminAuthAction = adminSlice.actions;
export const adminSlice1 = adminSlice.reducer;
