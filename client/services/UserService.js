import HttpService from './HttpService';

const ENV = process.env.NODE_ENV;
const BASE_URL = ENV !== 'development' ? '/api' : '//localhost:3000/api';
const USER_URL = HttpService.getUrl('user');

const resolveData = (res) => res.data;

function getUserById(userId) {
  console.log('getUserById');

  return HttpService.get(`${USER_URL}/${userId}`).then(resolveData);
}
function getUserAndOrders(userId) {
  return HttpService.get(`${USER_URL}/${userId}`).then(resolveData);
}

function login(userCredentials) {
  return HttpService.put(`${BASE_URL}/login`, userCredentials).then(
    resolveData,
  );
}

function signup(user) {
  return HttpService.post(`${BASE_URL}/signup`, user).then(resolveData);
}

function getEmptyUser() {
  return {
    type: null,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    stock: [],
  };
}

export default {
  login,
  signup,
  getEmptyUser,
  getUserAndOrders,
  getUserById,
};
