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

  if (offer.id) {
    return HttpService.put(`${OFFER_URL}/${offer.id}`, offer).then(resolveData);
  }
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
