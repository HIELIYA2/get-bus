<template>
  <section class="list">
    <header class="header">{{ this.user.firstName }}'s orders</header>
    <main class="main items">
      <div v-for="card in orders" :key="card._id" class="cards">
        <card class="card" :card="card"></card>
      </div>
    </main>
    <footer class="footer" v-if="user.type === 'Rider'">
      <button class="list-add-order" @click="newOrder()">
        Add order
        <i class="fa fa-plus"></i>
      </button>
    </footer>
  </section>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
import card from '@/components/Card.vue';

export default {
  name: 'List',
  props: {
    user: Object,
  },
  data() {
    return {};
  },
  components: {
    card,
  },
  computed: {
    orders: {
      get() {
        if (this.user.type === 'Driver') {
          return this.$store.getters.getAllOrders.map((o) => o._id);
        }
        return this.$store.getters.getOrders;
      },
      set(order) {
        this.$store.commit('setOrder', order);
      },
    },
  },
  watchEffect() {},
  methods: {
    newOrder() {
      this.$router.replace('/route');
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  max-height: 100vh;
  padding: 3px;
  width: 25vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;

  .header {
    font-weight: bold;
    color: rgb(29, 58, 65);
    font-size: 22px;
    padding: 10px 0;
  }
  .main {
    height: 50vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .footer {
    margin: 10px 0;
    max-height: 200px;
    .list-add-order {
      padding: 10px 0;
      width: 25vw;
      height: 40px;
      background-color: rgb(235, 235, 235);
      font-size: 20px;
      color: rgb(77, 156, 174);
      border-radius: 7px;
      border: none;
      box-shadow: 0px 0px 2px 1px rgb(95, 195, 218);
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 3px 2px rgb(95, 195, 218);
      }
      .fa-plus {
        color: rgba(77, 156, 174, 0.747);
      }
    }
  }
}
</style>
