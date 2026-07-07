import axios from "axios";

const api = axios.create({
  baseURL: "https://telemed-backend-wo6s.onrender.com",
});

export default api;
