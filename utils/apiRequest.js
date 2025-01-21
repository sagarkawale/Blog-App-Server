import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://blog-app-server-8j83.onrender.com",
  withCredentials: true,
});
