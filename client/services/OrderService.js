import HttpService from './HttpService';

const ORDER_URL = HttpService.getUrl('order');

const resolveData = (res) => res.data;

function query() {
  return HttpService.get(ORDER_URL).then(resolveData);
}

function getOrderById(userId) {
  return HttpService.get(`${ORDER_URL}/${userId}`).then(resolveData);
}
function getAllOrders() {
  return HttpService.get(`${ORDER_URL}`).then(resolveData);
}

function removeOrder(orderId) {
  return HttpService.delete(`${ORDER_URL}/${orderId}`);
}

function saveOrder(order) {
  if (order.id) {
    return HttpService.put(`${ORDER_URL}/${order.id}`, order).then(resolveData);
  }
  return HttpService.post(ORDER_URL, order).then(resolveData);
}

function getEmptyOrder() {
  return {
    title: '',
    description: '',
    size: null,
    datestart: null,
    dateEnd: null,
    positionStart: '',
    positionEnd: '',
    offerChose: null,
    offers: [],
  };
}

export default {
  query,
  getOrderById,
  getAllOrders,
  removeOrder,
  saveOrder,
  getEmptyOrder,
};
