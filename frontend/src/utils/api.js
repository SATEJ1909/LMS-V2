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
  signup: (userData) => api.post('/api/v1/user/signup', userData),
  login: (credentials) => api.post('/api/v1/user/login', credentials),
  getProfile: () => api.get('/api/v1/user/profile'),
};

// User API calls
export const userAPI = {
  getAllCourses: () => api.get('/api/v1/user/courses'),
  purchaseCourse: (courseId) => api.post('/api/v1/user/purchase', { courseId }),
};

// Instructor API calls
export const instructorAPI = {
  createCourse: (courseData) => api.post('/api/v1/instructor/create', courseData),
  updateCourse: (courseData) => api.put('/api/v1/instructor/update', courseData),
  deleteCourse: (courseId) => api.delete('/api/v1/instructor/delete', { data: { courseId } }),
};

// Admin API calls
export const adminAPI = {
  getAllUsers: () => api.get('/api/v1/admin/users'),
  getAllInstructors: () => api.get('/api/v1/admin/instructors'),
};

export default api;
