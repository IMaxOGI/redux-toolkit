import axios from "axios";

const apiClient = axios.create({
  baseUrl: "http://localhost:3001",
  withCredentials: true,
});

export default apiClient;
