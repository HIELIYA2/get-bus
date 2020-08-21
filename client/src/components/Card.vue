<template>
  <section
    @mouseleave="cardOver = false"
    @mouseover="cardOver = true"
    class="card"
    @click="clickOrder(card)"
  >
    <main class="main" v-if="cardOver">
      <div class="title-card">
        <div>passengers {{ order.size }}{{ card.size }}</div>
        <div>from: {{ order.positionStart }}{{ card.positionStart }}</div>
        <div>to: {{ order.positionEnd }}{{ card.positionEnd }}</div>
      </div>
    </main>
    <main class="main" v-if="!cardOver">
      <div class="title-card">{{ order.title }}{{ card.title }}</div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  data() {
    return {
      order: [],
      cardOver: false,
    };
  },

  computed: {
    currUser: {
      get() {
        return this.$store.getters.loggedInUser;
      },
    },
    order2: {
      get() {
        return this.$store.getters.getOrder;
      },
      set(order) {
        this.$store.commit('setOrder', order);
      },
    },
  },
  created() {
    const orderId = this.card;
    this.$store.dispatch({ type: 'loadOrder', orderId }).then((res) => {
      this.order = res;
    });
  },

  methods: {
    clickOrder(orderId) {
      const offerId = this.currUser.stock.filter(
        (v) => this.order.offers.indexOf(v) !== -1,
      );
      this.$store.dispatch({ type: 'loadOffer', offerId }).then((res) => {
        console.log('this.offer', res);
      });
      this.$store.commit('setCurrOrder', { order: orderId });
      this.$store.dispatch({ type: 'loadOrder', orderId }).then((res) => {
        this.order = res;
        console.log('this.order', this.order);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 4px;
  min-width: 25vw;
  max-width: 25vw;
  height: 100px;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgba(77, 156, 174, 0.226);
  border-radius: 10px;
  margin: 3px 0;
  box-shadow: 0px 5px 6px -4px rgba(0, 0, 0, 0.4);
  border-bottom: 0.9px solid rgb(167, 165, 165);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 255, 255);
  }
  .main {
    .title-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(49, 49, 49);
      padding: 2px 0;
    }
  }
}
</style>
