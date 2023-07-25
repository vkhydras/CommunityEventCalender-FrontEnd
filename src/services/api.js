import axios from 'axios';

const api = axios.create({
  baseURL: 'https://communityeventcalender-server-zp9d.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`, 
  },
});

export default api;
