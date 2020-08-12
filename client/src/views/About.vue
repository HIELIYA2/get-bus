<template>
  <div class="about">
    <section class="section-1">
      <div class="about-caption">
        <h1 class="about-h1">GETBUS</h1>
        <h2 class="about-h2">Everywhere</h2>
        <h3 class="about-p1">
          With a national network,
        </h3>
        <h3 class="about-p2">
          Next step in the world of transportation
        </h3>
      </div>
      <img src="../assets/imgs/12.png" alt="" class="about-phone" />
    </section>
    <section class="section-2">
      <img src="../assets/imgs/16.gif" alt="" class="about-img about-land" />
      <div class="about-caption">
        <h1 class="about-h1">GETBUS</h1>
        <h2 class="about-h2">Everywhere</h2>
        <h3 class="about-p1">
          With a national network,
        </h3>
        <h3 class="about-p2">
          Next step in the world of transportation
        </h3>
      </div>
    </section>
    <section class="section-3"></section>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
};
</script>

<style lang="scss" scoped>
.about {
  padding-top: 75px;
  min-height: 100vh;
  background-color: rgb(220, 241, 245);
  .section-1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    .about-phone {
      height: 80vh;
    }
  }
  .section-2 {
    z-index: -10;
    width: calc(100vw - 3px);
    height: 100vh;
    object-fit: cover;
    background-image: url('../assets/imgs/15.jpg');
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .about-land {
      align-items: center;
      justify-content: flex-start;
      z-index: 3;
      height: 80vh;
    }
    .about-caption {
      font-family: OpenSansCondensed-Light;
      padding-bottom: 150px;
      .about-h1 {
        font-size: 50px;
        padding-bottom: 5px;
        font-weight: bold;
      }
      .about-h2 {
        font-size: 40px;
        padding-bottom: 20px;
      }
      .about-p1,
      .about-p2 {
        font-size: 30px;
        padding-bottom: 5px;
      }
    }
  }
  .section-3 {
    height: 100vh;
    background-color: darkcyan;
  }
}
</style>
