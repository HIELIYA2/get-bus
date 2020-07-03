import Vue from 'vue';
import Vuex from 'vuex';

import orderStore from '../../modules/orderStore';
import offerStore from '../../modules/offerStore';
import userStore from '../../modules/userStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { userStore, orderStore, offerStore },
});
