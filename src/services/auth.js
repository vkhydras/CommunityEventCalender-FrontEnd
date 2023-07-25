import api from './api';

const authService = {
  login: async (userData, onLogin) => { 
    try {
      const response = await api.post('/users/login', userData);
      const { token } = response.data;

      
      localStorage.setItem('authToken', token);
      onLogin();

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },


};

export default authService;
