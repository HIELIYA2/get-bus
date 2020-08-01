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
      return UserService.getUserAndOrder(userId).then((res) => {
        context.commit({ type: 'setUser', user: res });
        context.commit({ type: 'setOrders', orders });
      });
    },
    async loadUser(context, { userId }) {
      return UserService.getUserById(userId).then((res) => {
        console.log('loadUser', res);
        return res;
      });
    },
    login(context, { user }) {
      return UserService.login(user).then((res) => {
        if (user) {
          const x = JSON.parse(JSON.stringify(res));
          context.commit({ type: 'setUser', user: x });
        }
        return res;
      });
    },
    logout(context, { userId }) {
      context.commit({ type: 'logout', userId });
    },
    signup(context, { user }) {
      return UserService.signup(user).then(() => {
        if (user) {
          context.commit({ type: 'setUser', user: user[0] });
        }
        return user;
      });
    },
  },
};
