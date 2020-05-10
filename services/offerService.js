const mongoService = require('./mongoService');
const OFFERS_DB = 'orders';

const ObjectId = require('mongodb').ObjectId;

function query() {}

function addOffer(offer) {}

function getOfferById(offerId) {}

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
