import axios from "axios";

const API = "http://localhost:5000/api";

export const getRecommendations = (query) =>
  axios.post(`${API}/recommend`, { query });

// ✅ NEW
export const getProductById = (id) =>
  axios.get(`${API}/products/${id}`);