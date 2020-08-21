/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
import HttpService from './HttpService';

const OFFER_URL = HttpService.getUrl('offer');

const resolveData = (res) => res.data;

function query() {
  return HttpService.get(OFFER_URL).then(resolveData);
}

function getOfferById(userId) {
  return HttpService.get(`${OFFER_URL}/${userId}`).then(resolveData);
}
function getAllOffers() {
  return HttpService.get(`${OFFER_URL}`).then(resolveData);
}

function removeOffer(offerId) {
  return HttpService.delete(`${OFFER_URL}/${offerId}`);
}

function saveOffer(offer) {
  console.log('offer service ', offer);
  if (offer._id) {
    console.log('puuuuutttt');
    return HttpService.put(`${OFFER_URL}/${offer._id}`, offer).then(
      resolveData,
    );
  }
  console.log('ppooosssstttt');
  return HttpService.post(OFFER_URL, offer).then(resolveData);
}

function getEmptyOffer() {
  return {
    price: null,
    userIdDriver: '',
    userIdRider: '',
  };
}

export default {
  query,
  getOfferById,
  getAllOffers,
  removeOffer,
  saveOffer,
  getEmptyOffer,
};
