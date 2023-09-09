import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.filtroo.co",
  // baseURL: "http://localhost:8080",
  // baseURL: "http://192.168.0.14:8080",
});
