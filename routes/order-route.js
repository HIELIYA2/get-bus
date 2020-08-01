const orderService = require('../services/orderService');
const ORDER_URL = '/api/order';
function addOrdersRoutes(app) {
  // orders REST API:

  // ORDERS
  app.get(ORDER_URL, (req, res) => {
    orderService.query().then((orders) => res.json(orders));
  });

  // SINGLE - GET Full detail
  app.get(`${ORDER_URL}/:orderId`, (req, res) => {
    const orderId = req.params.orderId;
    orderService.getOrderById(orderId).then((order) => res.json(order));
  });

  // DELETE
  app.delete(`${ORDER_URL}/:orderId`, (req, res) => {
    const orderId = req.params.orderId;
    orderService
      .removeOrder(orderId)
      .then(() => res.end(`The Order ${orderId} Was Deleted `));
  });

  // CREATE
  app.post(ORDER_URL, (req, res) => {
    const order = req.body;
    orderService.addOrder(order).then((order) => res.json(order));
  });

  // UPDATE
  app.put(`${ORDER_URL}/:orderId`, (req, res) => {
    const order = req.body;
    // delete order.users;
    orderService.updateOrder(order).then((order) => res.json(order));
  });
}

module.exports = addOrdersRoutes;
