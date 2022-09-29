import axios from 'axios';

const auth = axios.create({
  baseURL: 'http://localhost:5005',
});

const signUp = (username, password, campus, course) => {
  return auth
    .post('/auth/signup', { username, password, campus, course })
    .then((response) => response.data);
};

const logIn = (username, password) => {
  return auth
    .post('/auth/login', { username, password })
    .then((response) => response.data.authToken);
};

const verifyToken = () => {
  const storedToken = localStorage.getItem('authToken');

  return auth
    .get('/auth/verify', {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
};

const uploadPhoto = (file) => {
  const storedToken = localStorage.getItem('authToken');

  return auth
    .post('/api/upload', file, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
};

const getUser = () => {
  const storedToken = localStorage.getItem('authToken');

  return auth
    .get('/api/user', { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response) => response.data);
};

const editUser = (image) => {
  const storedToken = localStorage.getItem('authToken');

  return auth
    .put(
      '/api/user',
      { image },
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => response.data);
};

const authService = {
  signUp,
  logIn,
  verifyToken,
  uploadPhoto,
  getUser,
  editUser,
};

export default authService;
