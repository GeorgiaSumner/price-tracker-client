import axios from "axios";

const api = axios.create({
  baseURL: "https://price-tracer-docker.onrender.com/",
});

export default api;
