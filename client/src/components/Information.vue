<template>
  <section class="information">
    <header class="header">Order details</header>

    <main class="main items">
      <div class="details">
        <!-- <pre class="title-card">order: {{this.order}}</pre> -->
        <pre class="size">Passengers {{ this.order.size }}</pre>
        <pre class="date-start">Release Date {{ this.order.datestart }}</pre>
        <pre class="date-end">return date {{ this.order.dateEnd }}</pre>
        <pre class="position-start">
Start location {{ this.order.positionStart }}</pre
        >
        <pre class="position-end">
End location {{ this.order.positionEnd }}</pre
        >
      </div>
    </main>
    <footer class="footer">
      <div v-if="user.type === 'Driver'" class="footer-title">
        Enter your offer
      </div>
      <div v-else class="footer-title">
        Offers details
      </div>
      <bottom class="bottom" msg="bottom"></bottom>
    </footer>
  </section>
</template>

<script>
import bottom from './Bottom.vue';
export default {
  name: 'Details',
  props: {
    msg: String,
    user: Object,
  },
  data() {
    return {};
  },
  components: {
    bottom,
  },
  computed: {
    currOrder: {
      get() {
        return this.$store.getters.getCurrOrder;
      },
    },
    order: {
      get() {
        return this.$store.getters.getOrder;
      },
      set(order) {
        this.$store.commit('setOrder', order);
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.information {
  max-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .header {
    font-weight: bold;
    color: rgb(29, 58, 65);
    font-size: 22px;
    padding: 10px;
  }
  .main {
    .details {
      height: 35vh;
      width: 45vw;
      background-color: rgb(235, 235, 235);
      color: rgb(49, 49, 49);
      border-radius: 7px;
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: column;
      font-size: 24px;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(29, 58, 65);
    font-size: 22px;
    padding: 18px 0 10px;
    .footer-title {
      font-weight: bold;
      margin-bottom: 12px;
      color: rgb(29, 58, 65);
    }
  }
}
</style>
