import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
});

// Auth API calls
export const authAPI = {
  signup: (userData) => api.post('/user/signup', userData),
  login: (credentials) => api.post('/user/login', credentials),
  getProfile: () => api.get('/user/profile'),
};

// User API calls
export const userAPI = {
  getAllCourses: () => api.get('/user/courses'),
  purchaseCourse: (courseId) => api.post('/user/purchase', { courseId }),
};

// Instructor API calls
export const instructorAPI = {
  createCourse: (courseData) => api.post('/instructor/create', courseData),
  updateCourse: (courseData) => api.put('/instructor/update', courseData),
  deleteCourse: (courseId) => api.delete('/instructor/delete', { data: { courseId } }),
};

// Admin API calls
export const adminAPI = {
  getAllUsers: () => api.get('/admin/users'),
  getAllInstructors: () => api.get('/admin/instructors'),
};

export default api;
