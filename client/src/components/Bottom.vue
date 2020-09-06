<template>
  <section class="bottom">
    <main class="main">
      <div class="details">
        <div v-if="currUser.type === 'Driver'">
          <div class="offer-surface" v-if="currOrder">
            <div>
              <div
                class="price"
                type="price"
                v-if="!isChangePrice"
                @click.prevent.stop="chosePrice"
              >
                {{ this.offer.price }}
              </div>
              <input
                @keyup.enter.enter="closeEditPrice"
                @click.stop="chosePrice"
                value="offer.price"
                v-if="isChangePrice"
                class="input-driver"
                ref="price"
                v-model="offer.price"
                placeholder="Enter price here..."
                autofocus
              />
            </div>
            <button class="send-driver" @click="changePrice()">Submit</button>
          </div>
          <div v-else>please choose order</div>
        </div>
        <div
          class="rider-cards"
          v-if="currUser.type === 'Rider' && order.offers.length"
        >
          <div v-for="proposal in order.offers" :key="proposal" class="offer">
            <proposal class="offer" :offerID="proposal"></proposal>
          </div>
        </div>
        <div v-if="currUser.type === 'Rider' && order.offers.length === 0">
          You haven't received any offers yet
        </div>
      </div>
    </main>
  </section>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
import proposal from './Offer.vue';

export default {
  name: 'Bottom',
  props: {},
  data() {
    return {
      isChangePrice: false,
    };
  },
  components: {
    proposal,
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
    offer: {
      get() {
        return this.$store.getters.getOffer;
      },
      set(saveOffer) {
        this.$store.commit('setOffer', { offer: saveOffer });
      },
    },
  },

  methods: {
    changePrice() {
      console.log(this.offer);
      this.isChangePrice = false;
      console.log('this.currOrder', this.currOrder, this.offer);
      this.$store.dispatch({ type: 'saveOffer', offer: this.offer });
      // .then(() => {
      //   this.$router.replace({ path: 'private' });
      //   const userId = this.$store.getters.loggedInUser._id;
      //   const orderItem = OrderService.getEmptyOrder();
      //   this.$store.commit('setOrder', { order: orderItem });
      //   this.$store.dispatch({ type: 'loadOrders', userId });
      //   SocketService.send(userId);
      // });
      // this.$store.dispatch({ type: 'saveList', list: this.list });
      // SocketService.send(this.list.boardId);
    },
    chosePrice() {
      this.isChangePrice = true;
    },
    closeEditPrice() {
      this.isChangePrice = false;
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
        .price {
          background-color: rgb(235, 235, 235);
          height: 40px;
          min-width: 170px;
          max-width: 45vw;
          margin-right: 20px;
        }
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
