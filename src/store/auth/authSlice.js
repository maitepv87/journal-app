import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", // "checking", "not-authenticated", authenticated
  userId: null,
  email: null,
  desplayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //   state.value += 1;
    },
    logout: (state, action) => {
      //   state.value -= 1;
    },
    checkingCredentials: (state, action) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
