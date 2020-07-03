const mongoService = require('./mongoService');
const userService = require('./userService');
const ORDERS_DB = 'orders';
const USERS_DB = 'users';

const ObjectId = require('mongodb').ObjectId;

function query() {
  return mongoService
    .connect()
    .then((db) => db.collection(ORDERS_DB).find({}).toArray());
}

function addOrder(order) {
  console.log('addOrder', order);
  return mongoService.connect().then((db) => {
    const collection = db.collection(ORDERS_DB);
    return collection.insertOne(order).then((result) => {
      order._id = result.insertedId;
      userService.addOrderID(order, order._id);
      return order;
    });
  });
}

function addOfferID(offer, offerId) {
  console.log('update add offer ID', offerId, offer);
  return mongoService.connect().then((db) => {
    const orderID = new ObjectId(offer.orderID);
    console.log('orderID:', orderID);
    const collection = db.collection(ORDERS_DB);
    return collection.updateOne(
      { _id: orderID },
      { $push: { offers: offer._id } }
    );
  });
}

function getOrderById(orderId) {
  orderId = new ObjectId(orderId);
  return mongoService.connect().then(async (db) => {
    const collection = db.collection(ORDERS_DB);
    const x = await collection.findOne({ _id: orderId });
    console.log(x);
    return x;
  });
}

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
  addOfferID,
  getOrderById,
  removeOrder,
  updateOrder,
};
