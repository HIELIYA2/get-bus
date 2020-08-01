<template>
  <section class="offer" @click="clickOffer(offer)">
    <main class="main">
      <div class="title-offer">{{ offer.price }}</div>
    </main>
    <modal
      v-if="modal"
      @closeModal="modalCl"
      :details="details"
      :offer="offer"
    ></modal>
  </section>
</template>

<script>
import modal from './Modal.vue';

export default {
  name: 'Offer',
  props: ['offerID'],
  data() {
    return {
      modal: false,
      offer: [],
      details: [],
    };
  },

  components: { modal },
  created() {
    const offerId = this.offerID;
    this.$store.dispatch({ type: 'loadOffer', offerId }).then((res) => {
      this.offer = res;
    });
  },

  methods: {
    modalCl() {
      console.log('close modal');
      this.modal = false;
    },
    clickOffer(offerId) {
      console.log('modal', this.modal);
      this.modal = true;
      const offer = JSON.parse(JSON.stringify(offerId));
      const { userID } = offer;
      console.log('peek offer', userID);
      this.$store.dispatch({ type: 'loadUser', userId: userID }).then((res) => {
        this.details = JSON.parse(JSON.stringify(res));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.offer {
  padding: 4px;
  min-width: 150px;
  max-width: 180px;
  min-height: 80px;
  max-height: 90px;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgba(77, 156, 174, 0.226);
  border-radius: 10px;
  margin: 3px 3px;
  box-shadow: 0px 5px 6px -4px rgba(0, 0, 0, 0.4);
  border-bottom: 0.9px solid rgb(167, 165, 165);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 255, 255);
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    .title-offer {
      color: rgb(49, 49, 49);
    }
  }
}
</style>
