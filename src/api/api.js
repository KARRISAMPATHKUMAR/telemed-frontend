import axios from "axios";

const api = axios.create({
  baseURL: "https://telemed-backend-w06s.onrender.com",
});

export default api;