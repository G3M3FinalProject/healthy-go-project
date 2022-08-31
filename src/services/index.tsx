import axios from "axios";

export const api = axios.create({
  baseURL: "https://healthy-go.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
