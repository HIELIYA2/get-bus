<template>
  <section class="offer" @click="clickOffer(offer)">
    <header class="header"></header>

    <main class="main">
      <div class="title-offer">{{ offer.price }}</div>
    </main>

    <footer class="footer"></footer>
  </section>
</template>

<script>
export default {
  name: 'Offer',
  props: ['offerID'],
  data() {
    return {
      offer: [],
    };
  },

  components: {},
  created() {
    const offerId = this.offerID;
    this.$store.dispatch({ type: 'loadOffer', offerId }).then((res) => {
      this.offer = res;
    });
  },

  methods: {
    clickOffer(offerId) {
      console.log('peek offer', offerId);
      // this.$store.commit('setCurrOrder', { order: orderId });
      // this.$store.dispatch({ type: 'loadOrder', orderId }).then((res) => {
      //   this.order = res;
      // });
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
