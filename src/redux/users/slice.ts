import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  type Notice,
  getCurrentUserFull,
} from "./operations";

interface User {
  _id?: string;
  name: string;
  email: string;
  token: string | null;
  noticesFavorites?: Notice[] | null;
}

export interface UserState {
  user: User | null;
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
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        };
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
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        };
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
        state.user = { name: "", email: "", token: null };
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.user = { name: "", email: "", token: null };
        state.isLoggedIn = false;
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Sign out failed";
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.error = action.payload || "Unexpected error";
      })
      .addCase(getCurrentUserFull.pending, (state) => {
        state.error = null;
      })
      .addCase(getCurrentUserFull.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getCurrentUserFull.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.error = action.payload || "Unexpected error";
      });
  },
});

export default usersSlice.reducer;
