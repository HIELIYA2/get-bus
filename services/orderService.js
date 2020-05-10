const mongoService = require('./mongoService');
const ORDERS_DB = 'orders';

const ObjectId = require('mongodb').ObjectId;

function query() {}

function addOrder(order) {}

function getOrderById(orderId) {}

function removeOrder(orderId) {
  const _id = new ObjectId(orderId);
  return mongoService
    .connect()
    .then((db) => db.collection(ORDERS_DB).removeOne({ _id }));
}

function updateOrder(order) {
  const orderId = order._id;
  order._id = new ObjectId(order._id);
  return mongoService
    .connect()
    .then((db) => {
      return db
        .collection(ORDERS_DB)
        .updateOne({ _id: order._id }, { $set: order });
    })
    .then(() => {
      return getOrderById(orderId);
    });
}

module.exports = {
  query,
  addOrder,
  getOrderById,
  removeOrder,
  updateOrder,
};
