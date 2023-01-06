import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-healthygo.onrender.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addressApi = axios.create({
  baseURL: "https://geolocation-db.com/json",
  timeout: 10000,
});
