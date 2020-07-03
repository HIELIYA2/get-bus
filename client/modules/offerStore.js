import OfferService from '../services/OfferService';

export default {
  state: {
    allOffers: [],
    offer: {},
    currOffer: null,
  },
  getters: {
    getCurrOffer: (state) => state.currOffer,
    getOffer: (state) => state.offer,
    getAllOffers: (state) => state.allOffers,
  },
  mutations: {
    resetState(state) {
      state.currOffer = null;
      state.offer = {};
    },
    setCurrOffer(state, { offer }) {
      state.currOffer = offer;
    },
    setOffer(state, { offer }) {
      state.offer = offer;
    },
    setAllOffers(state, { allOffers }) {
      state.allOffers = allOffers;
    },
  },
  actions: {
    loadAllOffers(context) {
      return OfferService.getAllOffers().then((res) => {
        context.commit({ type: 'setAllOffers', allOffers: res });
        return res;
      });
    },
    async loadOffer(context, { offerId }) {
      return OfferService.getOfferById(offerId).then((res) => {
        context.commit({ type: 'setOffer', offer: res });
        return res;
      });
    },
    resetOffer(context, { isReset }) {
      if (isReset) {
        context.commit({ type: 'resetState' });
      }
    },
    saveOffer(context, { offer }) {
      console.log('offer store save:', offer);
      return OfferService.saveOffer(offer).then((savedOffer) => {
        context.commit({ type: 'setOffer', offer: savedOffer[0] });
        return savedOffer[0];
      });
    },
  },
};
