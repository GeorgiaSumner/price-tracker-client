import axios from "axios";

const api = axios.create({
  baseURL: "https://price-tracer-docker.onrender.com/cardSearch",
});

export default api;
