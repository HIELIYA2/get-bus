<template>
  <section class="modal" @click.stop="modal()">
    <main class="main">
      <div class="close" @click.stop="closeModal()">
        <i class="fas fa-times"></i>
      </div>
      <div class="title-modal">
        <pre>{{ details.user.firstName }}</pre>
        <pre>{{ details.user.lastName }}</pre>
        <pre>{{ details.user.email }}</pre>
        <pre>{{ offer.price }}</pre>
      </div>
      <div class="close" @click.stop="book()">
        <i class="fas fa-check"></i>
      </div>
    </main>
  </section>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
export default {
  name: 'Modal',
  props: ['details', 'offer'],
  data() {
    return {};
  },

  components: {},
  computed: {
    currOrder: {
      get() {
        return this.$store.getters.getCurrOrder;
      },
    },
  },
  created() {},

  methods: {
    closeModal() {
      this.$emit('closeModal', false);
    },
    modal() {},

    book() {
      const { orders } = JSON.parse(JSON.stringify(this.details));
      const orderID = this.currOrder;
      const orderToChange = orders.find((found) => {
        if (found._id === orderID) {
          return found;
        }
        return null;
      });
      orderToChange.offerChose = this.offer._id;
      this.$store.dispatch({ type: 'saveOrder', order: orderToChange });
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000e5;

  .main {
    z-index: 5;
    transition: transform 0.75s;
    max-width: 90%;
    width: 75vw;
    height: 50vh;
    background-color: #eeeeee;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    color: #080808;
    border-radius: 5px;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    .close {
      pointer-events: auto;
      display: flex;
      align-self: flex-end;
      justify-content: center;
      align-items: center;
      justify-content: center;
      margin: 20px 20px 0 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: -webkit-linear-gradient(90deg, #0d4e4c 10%, #0a532e 90%);
      .fas {
        color: #eeeeee;
      }
    }
  }
}
</style>
