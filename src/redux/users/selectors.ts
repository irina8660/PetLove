import type { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.users.isLoggedIn;

export const selectUser = (state: RootState) => state.users.user;

export const selectError = (state: RootState) => state.users.error;
