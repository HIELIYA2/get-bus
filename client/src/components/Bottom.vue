<template>
  <section class="bottom">
    <main class="main">
      <div class="details">
        <div v-if="currUser.type === 'Driver'">
          <div class="offer-surface" v-if="currOrder">
            <input
              class="input-driver"
              type="price"
              v-model="offer.price"
              placeholder="Your proposal"
            />
            <button class="send-driver" @click="sendPrice()">Submit</button>
          </div>
          <div v-else>please choose order</div>
        </div>
        <div
          class="rider-cards"
          v-if="currUser.type === 'Rider' && order.offers.length"
        >
          <div v-for="offer in order.offers" :key="offer" class="offer">
            <offer class="offer" :offerID="offer"></offer>
          </div>
        </div>
        <div v-else>You haven't received any offers yet</div>
      </div>
    </main>
  </section>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
import offer from './Offer.vue';

export default {
  name: 'Bottom',
  props: {
    msg: String,
  },
  data() {
    return {
      offer: {
        price: null,
      },
    };
  },
  components: {
    offer,
  },
  computed: {
    currOrder: {
      get() {
        return this.$store.getters.getCurrOrder;
      },
    },
    currUser: {
      get() {
        return this.$store.getters.loggedInUser;
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
  methods: {
    sendPrice() {
      this.offer.userID = this.currUser._id;
      this.offer.orderID = this.currOrder;
      console.log('this.currOrder', this.currOrder);

      this.$store.dispatch({ type: 'saveOffer', offer: this.offer });
      // .then(() => {
      //   this.$router.replace({ path: 'private' });
      //   const userId = this.$store.getters.loggedInUser._id;
      //   const orderItem = OrderService.getEmptyOrder();
      //   this.$store.commit('setOrder', { order: orderItem });
      //   this.$store.dispatch({ type: 'loadOrders', userId });
      //   SocketService.send(userId);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .main {
    overflow-x: auto;
    overflow-y: hidden;
    .details {
      width: 45vw;
      .offer-surface {
        display: flex;
        justify-content: center;
        align-items: center;
        .input-driver {
          background-color: rgb(235, 235, 235);
          border: none;
          border-radius: 7px;
          height: 40px;
          min-width: 170px;
          max-width: 45vw;
          margin-right: 20px;
        }
        .send-driver {
          background-color: rgb(235, 235, 235);
          border: none;
          border-radius: 7px;
          height: 40px;
          width: 80px;
        }
      }
      .rider-cards {
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
