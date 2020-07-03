<template>
  <div class="home">
    <HomeHeader msg="HomeHeader" />
    <HomeFotter msg="HomeFotter" />
  </div>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFotter from '@/components/HomeFotter.vue';

export default {
  name: 'Home',
  created() {
    if (this.$store.getters.isUserLoggedIn) {
      const user = this.$store.getters.loggedInUser;
      console.log(user);
      this.$store.dispatch({ type: 'updateUser', userId: user._id });
    }
  },
  components: {
    HomeHeader,
    HomeFotter,
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
</style>
