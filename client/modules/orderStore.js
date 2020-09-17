import OrderService from '../services/OrderService';
import userStore from './userStore';
import offerStore from './offerStore';

export default {
  state: {
    allOrders: [],
    order: {},
    currOrder: null,
  },
  getters: {
    getCurrOrder: (state) => state.currOrder,
    getOrder: (state) => state.order,
    getAllOrders: (state) => state.allOrders,
  },
  mutations: {
    resetState(state) {
      state.currOrder = null;
      state.order = {};
    },
    setCurrOrder(state, { order }) {
      state.currOrder = order;
    },
    setOrder(state, { order }) {
      state.order = order;
    },
    setAllOrders(state, { allOrders }) {
      state.allOrders = allOrders;
    },
  },
  actions: {
    loadAllOrders(context) {
      return OrderService.getAllOrders().then((res) => {
        console.log('loadAllOrders', res);
        context.commit({ type: 'setAllOrders', allOrders: res });
        return res;
      });
    },
    async loadOrder(context, { orderId }) {
      return OrderService.getOrderById(orderId).then((res) => {
        context.commit({ type: 'setOrder', order: res });
        const orderOffers = res.offers;
        if (orderOffers) {
          const userOffers = JSON.parse(
            JSON.stringify(userStore.state.user.stock),
          );
          const offerId = userOffers.filter((e) => orderOffers.includes(e));
          console.log('intersection ', offerId);
          if (offerId) {
            console.log('match is: ', offerId);
            offerStore.actions.loadOffer(offerId);
          }
        }
        return res;
      });
    },

    resetOrder(context, { isReset }) {
      if (isReset) {
        context.commit({ type: 'resetState' });
      }
    },
    saveOrder(context, { order }) {
      return OrderService.saveOrder(order).then((savedOrder) => {
        context.commit({ type: 'setOrder', order: savedOrder[0] });
        return savedOrder[0];
      });
    },
  },
};
