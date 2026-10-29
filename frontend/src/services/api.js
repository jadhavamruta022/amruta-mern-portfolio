
import axios from "axios";

// Backend API base URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error(
        "Server is not responding. Please check your backend."
      );
    } else {
      console.error("Request Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// Contact API
export const submitContactForm = (contactData) => {
  return api.post("/contact", contactData);
};

// Projects API
export const getProjects = () => {
  return api.get("/projects");
};

// Skills API
export const getSkills = () => {
  return api.get("/skills");
};

export default api;
