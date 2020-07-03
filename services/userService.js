const mongoService = require('./mongoService');
const USERS_DB = 'users';
const ObjectId = require('mongodb').ObjectId;

function query() {
  return mongoService
    .connect()
    .then((db) => db.collection(USERS_DB).find({}).toArray());
}

function addUser(user) {
  user.firstName[0].toUpperCase();
  user.lastName[0].toUpperCase();
  return mongoService.connect().then((db) =>
    db
      .collection(USERS_DB)
      .insertOne(user)
      .then((res) => {
        user._id = res.insertedId;
        return user;
      })
  );
}

function addOrderID(order, orderId) {
  console.log('update add order ID', orderId, order);
  const userID = new ObjectId(order.uid);
  return mongoService.connect().then((db) => {
    const collection = db.collection(USERS_DB);
    return collection.updateOne({ _id: userID }, { $push: { stock: orderId } });
  });
}

function addOfferID(offer, offerId) {
  console.log('update add offer ID', offerId, offer);
  return mongoService.connect().then((db) => {
    const userID = new ObjectId(offer.userID);
    const collection = db.collection(USERS_DB);
    return collection.updateOne({ _id: userID }, { $push: { stock: offerId } });
  });
}

function getUserById(userId) {
  const _id = new ObjectId(userId);
  return _id;
}

function removeUser(userId) {
  const _id = new ObjectId(userId);
  return mongoService
    .connect()
    .then((db) => db.collection(USERS_DB).remove({ _id }));
}

function updateUser(user) {
  user._id = new ObjectId(user._id);
  user.activities = null;
  user.firstName[0].toUpperCase();
  user.lastName[0].toUpperCase();
  return mongoService
    .connect()
    .then((db) =>
      db.collection(USERS_DB).updateOne({ _id: user._id }, { $set: user })
    );
}

async function checkLogin({ userCredentials }) {
  let user_db = await searchUser(userCredentials);
  return user_db;
}

function searchUser(user) {
  return mongoService.connect().then((db) => {
    const collection = db.collection(USERS_DB);
    return collection.findOne({
      firstName: user.userName,
      password: user.password,
    });
  });
}

module.exports = {
  query,
  addUser,
  addOrderID,
  addOfferID,
  getUserById,
  removeUser,
  updateUser,
  checkLogin,
};
