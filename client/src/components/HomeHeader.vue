<template>
  <div class="home-header">
    <video autoplay muted loop class="home-video">
      <source src="../assets/video/2.mp4" type="video/mp4" />
    </video>
    <div class="hhh">Worldwide Corporate Ground Travel</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    msg: String,
  },
};
</script>
<style lang="scss" scoped>
.home-header {
  margin-top: 96px;
  height: 90vh;
  .home-video {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -10;
    width: calc(100vw - 10px);
  }
  .hhh {
    z-index: 10;
    font-size: 90px;
    height: 90vh;
    width: 90vh;
    color: rgb(213, 188, 255);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
