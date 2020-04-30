<template>
  <div class="home">
    <HomeHeader msg="HomeHeader" />
    <HomeFotter msg="HomeFotter" />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFotter from '@/components/HomeFotter.vue';

export default {
  name: 'Home',
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
