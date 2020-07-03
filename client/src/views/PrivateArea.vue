<template>
  <div class="private">
    <!-- <video autoplay muted loop class="pa-img">
      <source src="../assets/imgs/10.mp4" type="video/mp4" />
    </video> -->
    <img src="../assets/imgs/6.jpg" alt="" class="pa-img" />

    <board class="board" :user="this.user" />
  </div>
</template>

<script>
import board from '@/components/Board.vue';

export default {
  name: 'Private',
  components: {
    board,
  },
  computed: {
    user: {
      get() {
        return this.$store.getters.loggedInUser;
      },
      set(user) {
        this.$store.commit('setUser', user);
      },
    },
  },
  data() {
    return {
      plan: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.private {
  margin-top: 96px;
  min-height: calc(100vh - 96px);
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .pa-img {
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    // filter: brightness(50%);
  }
}
</style>
