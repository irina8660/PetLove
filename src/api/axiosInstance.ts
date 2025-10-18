import axios from "axios";
import { toast } from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (
      originalRequest.url.includes("/users/signin") ||
      originalRequest.url.includes("/users/signup")
    ) {
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      localStorage.clear();
      toast.error("Session expired. Please log in again.");
      window.location.href = "/signin";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
