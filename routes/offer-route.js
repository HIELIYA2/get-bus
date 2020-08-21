const offerService = require('../services/offerService');
const OFFER_URL = '/api/offer';
function addOffersRoutes(app) {
  // offers REST API:

  //OFFERS
  app.get(OFFER_URL, (req, res) => {
    offerService.query().then((offers) => res.json(offers));
  });

  // SINGLE - GET Full detail
  app.get(`${OFFER_URL}/:offerId`, (req, res) => {
    const offerId = req.params.offerId;
    offerService.getOfferById(offerId).then((offer) => res.json(offer));
  });

  // DELETE
  app.delete(`${OFFER_URL}/:offerId`, (req, res) => {
    const offerId = req.params.offerId;
    offerService
      .removeOffer(offerId)
      .then(() => res.end(`The Offer ${offerId} Was Deleted `));
  });

  // CREATE
  app.post(OFFER_URL, (req, res) => {
    const offer = req.body;
    offerService.addOffer(offer).then((offer) => res.json(offer));
  });

  // UPDATE
  app.put(`${OFFER_URL}/:offerId`, (req, res) => {
    const offer = req.body;
    offerService.updateOffer(offer).then((offer) => res.json(offer));
  });
}

module.exports = addOffersRoutes;
