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

function checkLogin({ userCredentials }) {}

module.exports = {
  query,
  addUser,
  getUserById,
  removeUser,
  updateUser,
  checkLogin,
};
