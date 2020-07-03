const mongoService = require('./mongoService');
const orderService = require('./orderService');
const userService = require('./userService');
const OFFERS_DB = 'offers';

const ObjectId = require('mongodb').ObjectId;

function query() {
  return mongoService
    .connect()
    .then((db) => db.collection(OFFERS_DB).find({}).toArray());
}

function addOffer(offer) {
  console.log('add offer', offer);
  return mongoService.connect().then((db) => {
    const collection = db.collection(OFFERS_DB);
    return collection.insertOne(offer).then((result) => {
      offer._id = result.insertedId;
      orderService.addOfferID(offer, offer._id);
      userService.addOfferID(offer, offer._id);
      return offer;
    });
  });
}

function getOfferById(offerId) {
  offerId = new ObjectId(offerId);
  return mongoService.connect().then(async (db) => {
    const collection = db.collection(OFFERS_DB);
    const x = await collection.findOne({ _id: offerId });
    console.log(x);
    return x;
  });
}
function removeOffer(offerId) {
  const _id = new ObjectId(offerId);
  return mongoService
    .connect()
    .then((db) => db.collection(OFFERS_DB).removeOne({ _id }));
}

function updateCard(order) {
  const offerId = offer._id;
  offer._id = new ObjectId(offer._id);
  return mongoService
    .connect()
    .then((db) => {
      return db
        .collection(OFFERS_DB)
        .updateOne({ _id: offer._id }, { $set: offer });
    })
    .then(() => {
      return getOfferById(offerId);
    });
}

module.exports = {
  query,
  addOffer,
  getOfferById,
  removeOffer,
  updateCard,
};
