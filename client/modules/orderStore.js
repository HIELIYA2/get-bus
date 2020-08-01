import OrderService from '../services/OrderService';

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
        context.commit({ type: 'setAllOrders', allOrders: res });
        return res;
      });
    },
    async loadOrder(context, { orderId }) {
      return OrderService.getOrderById(orderId).then((res) => {
        context.commit({ type: 'setOrder', order: res });
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
