import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, signOut } from "./operations";

export interface UserState {
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Sign up failed";
      })
      .addCase(signIn.pending, (state) => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Sign in failed";
      })
      .addCase(signOut.pending, (state) => {
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user.name = "";
        state.user.email = "";
        state.user.token = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Sign out failed";
        state.isLoggedIn = false;
      });
  },
});

export default usersSlice.reducer;
