import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, signOut } from "./operations";

interface UserState {
  user: {
    name: string;
    email: string;
    token: string | null;
  };
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    token: null,
  },
  isLoggedIn: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  redusers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});
