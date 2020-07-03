<template>
  <div class="route">
    <img src="../assets/imgs/6.png" alt class="route-img" />

    <form class="form-route" @submit.prevent.stop="addOrder">
      <input
        class="route-size"
        v-model="order.size"
        placeholder="size"
        required
      />
      <input
        class="route-trip-start"
        v-model="order.datestart"
        type="date"
        name="trip-start"
        required
      />
      <input
        id="searchTextField"
        class="route-trip-end"
        v-model="order.dateEnd"
        type="date"
        name="trip-end"
        required
      />
      <input
        class="route-position-start"
        id="searchTextField"
        type="text"
        size="50"
        placeholder="Enter a position-start"
        autocomplete="on"
        v-model="order.positionStart"
        runat="server"
        required
      />
      <input type="hidden" id="city2" name="city2" />
      <input type="hidden" id="cityLat" name="cityLat" />
      <input type="hidden" id="cityLng" name="cityLng" />

      <input
        class="route-position-end"
        id="searchTextField"
        type="text"
        size="50"
        placeholder="Enter a position-end"
        v-model="order.positionEnd"
        autocomplete="on"
        runat="server"
        required
      />
      <input type="hidden" id="city2" name="city2" />
      <input type="hidden" id="cityLat" name="cityLat" />
      <input type="hidden" id="cityLng" name="cityLng" />

      <button class="route-submit" type="submit">Check in</button>
    </form>
  </div>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
import OrderService from '../../services/OrderService';

export default {
  name: 'Route',
  data() {
    return {
      order: {
        title: '',
        description: '',
        size: null,
        datestart: null,
        dateEnd: null,
        positionStart: '',
        positionEnd: '',
        offerChose: null,
        offers: [],
        uid: this.$store.getters.loggedInUser._id,
      },
    };
  },
  methods: {
    addOrder() {
      this.$store
        .dispatch({ type: 'saveOrder', order: this.order })
        .then(() => {
          this.$router.replace({ path: 'private' });
          const userId = this.$store.getters.loggedInUser._id;
          const orderItem = OrderService.getEmptyOrder();
          this.$store.commit('setOrder', { order: orderItem });
          this.$store.dispatch({ type: 'loadOrders', userId });
          // SocketService.send(userId);
        });
    },
  },
  user: {
    get() {
      return this.$store.getters.loggedInUser;
    },
    set(user) {
      this.$store.commit('setUser', user);
    },
  },
  order: {
    get() {
      return this.$store.getters.getCurrCard;
    },
    set(item) {
      this.$store.commit('setCurrOrder', { order: item });
    },
  },
};
</script>

<style lang="scss" scoped>
.route {
  margin-top: 96px;
  min-height: calc(100vh - 96px);
  display: flex;
  justify-content: center;
  align-items: center;
  .route-img {
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(65%);
  }
  .form-route {
    display: flex;
    flex-direction: column;
    align-items: center;
    .route-size,
    .route-trip-start,
    .route-trip-end,
    .route-position-start,
    .route-position-end,
    .route-submit {
      font-size: 18px;
      font-family: PontanoSans-Regular;
      padding: 15px;
      width: 350px;
      height: 50px;
      border: 0px solid rgb(31, 31, 31);
      color: rgb(255, 255, 255);
      background-color: rgba(61, 61, 61, 0.274);
      margin: 7px 0;
      border-radius: 50px;
    }
    .route-submit {
      cursor: pointer;
    }
  }
}
</style>
