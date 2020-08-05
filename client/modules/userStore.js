/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/

import UserService from '../services/UserService';

export default {
  state: {
    user: {},
  },
  getters: {
    isUserLoggedIn: (state) => !!state.user._id,
    loggedInUser: (state) => state.user,
    getOrders: (state) => state.user.stock,
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
    setOrders(state, { orders }) {
      state.orders = orders;
    },
    logout(state, { userId }) {
      if (userId === state.user._id) {
        state.user = {};
      }
    },
  },
  actions: {
    updateUser(context, { userId, orders }) {
      return UserService.getUserAndOrders(userId).then((res) => {
        context.commit({ type: 'setUser', user: res.user });
        context.commit({ type: 'setOrders', orders });
      });
    },
    async loadUser(context, { userId }) {
      return UserService.getUserById(userId).then((res) => res);
    },
    login(context, data) {
      return UserService.login(data.user).then((res) => {
        if (res) {
          const user = res;
          context.commit({ type: 'setUser', user });
        }
        return res;
      });
    },
    logout(context, { userId }) {
      context.commit({ type: 'logout', userId });
    },
    signup(context, { user }) {
      return UserService.signup(user).then((res) => {
        if (res) {
          context.commit({ type: 'setUser', user: res });
        }
        return res;
      });
    },
  },
};
