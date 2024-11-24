import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://mehshiq-backend.vercel.app/api/",
});
