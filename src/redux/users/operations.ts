import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}
interface SignUpResponse {
  email: string;
  name: string;
  token: string;
}
const setAuthHeader = (value: string) => {
  axios.defaults.headers.common.Authorization = value;
};

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInResponse {
  email: string;
  name: string;
  token: string;
}

export const signUp = createAsyncThunk<
  SignUpResponse,
  SignUpCredentials,
  { rejectValue: string }
>("users/signup", async (credentials: SignUpCredentials, thunkAPI) => {
  try {
    const response = await axios.post<SignUpResponse>("users/signup", {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    });

    const fetchData: SignUpResponse = response.data;
    localStorage.setItem("accessToken", fetchData.token);
    setAuthHeader(`Bearer ${fetchData.token}`);
    return fetchData;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      type ServerErrorBody = { data?: string } | string | undefined;

      const serverBody = error.response?.data as ServerErrorBody;
      const serverMessage =
        typeof serverBody === "string" ? serverBody : serverBody?.data;

      const message =
        error.response?.status === 409
          ? "User with this email is already registered"
          : serverMessage || error.message || "Unexpected error occurred";

      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    } else {
      const fallback = "Unexpected error occurred";
      toast.error(fallback);
      return thunkAPI.rejectWithValue(fallback);
    }
  }
});

export const signIn = createAsyncThunk<
  SignInResponse,
  SignInCredentials,
  { rejectValue: string }
>("users/signin", async (credentials: SignInCredentials, thunkAPI) => {
  try {
    const response = await axios.post<SignInResponse>(
      "users/signin",
      credentials
    );
    const fetchData = response.data;
    localStorage.setItem("accessToken", fetchData.token);
    setAuthHeader(`Bearer ${fetchData.token}`);
    return fetchData;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      type ServerErrorBody = { data?: string } | string | undefined;

      const serverBody = error.response?.data as ServerErrorBody;
      const serverMessage =
        typeof serverBody === "string" ? serverBody : serverBody?.data;

      const message =
        error.response?.status === 400
          ? "Invalid username or password"
          : serverMessage ||
            error.message ||
            "Please, enter correct password and email";
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    } else {
      const fallback = "Please, enter correct password and email";
      toast.error(fallback);
      return thunkAPI.rejectWithValue(fallback);
    }
  }
});

export const signOut = createAsyncThunk<void, void, { rejectValue: string }>(
  "users/signout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("users/signout");
      if (response.status === 200) {
        toast.success("Sign out success");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error("Sign out failed — please try again");
      }
      return thunkAPI.rejectWithValue("Sign out failed");
    } finally {
      setAuthHeader("");
      localStorage.removeItem("accessToken");
    }
  }
);
