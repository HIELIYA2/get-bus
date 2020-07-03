<template>
  <section class="card" @click="clickOrder(card)">
    <header class="header"></header>

    <main class="main">
      <div class="title-card">size: {{ order.size }}{{ card.size }}</div>
      <div class="title-card">
        from: {{ order.positionStart }}{{ card.positionStart }}
      </div>
      <div class="title-card">
        to: {{ order.positionEnd }}{{ card.positionEnd }}
      </div>
    </main>

    <footer class="footer"></footer>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  data() {
    return {
      order: [],
    };
  },

  components: {},
  created() {
    const orderId = this.card;
    this.$store.dispatch({ type: 'loadOrder', orderId }).then((res) => {
      this.order = res;
    });
  },

  methods: {
    clickOrder(orderId) {
      console.log('peek order', orderId);
      this.$store.commit('setCurrOrder', { order: orderId });
      this.$store.dispatch({ type: 'loadOrder', orderId }).then((res) => {
        this.order = res;
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
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 255, 255);
  }
  .main {
    .title-card {
      color: rgb(49, 49, 49);
    }
  }
}
</style>
