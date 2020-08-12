<template>
  <div class="home-fotter">
    <head>
      <h1>{{ msg }}</h1>
    </head>
    <main class="icons">
      <div
        class="clock"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="0"
      >
        <img class="icon" src="../assets/clock.svg" alt="clock" />
        <div class="description">
          time saving
        </div>
      </div>
      <div
        class="clock"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
      >
        <img class="icon search" src="../assets/search.svg" alt="search" />
        <div class="description">
          Easy search
        </div>
      </div>
      <div
        class="clock"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
      >
        <img class="icon map" src="../assets/map.svg" alt="map" />
        <div class="description">
          Verified location
        </div>
      </div>
      <div
        class="clock"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <img
          class="icon placeholder"
          src="../assets/placeholder.svg"
          alt="placeholder"
        />
        <div class="description">
          Exact location
        </div>
      </div>
      <div
        class="clock"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <img class="icon route" src="../assets/route.svg" alt="route" />
        <div class="description">
          Short route
        </div>
      </div>
      <div
        class="clock"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
      >
        <img class="icon paper" src="../assets/paper.svg" alt="paper" />
        <div class="description">
          Fast and efficient
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeFotter',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.home-fotter {
  background-color: rgb(34, 34, 34);
  height: 100vh;
  .icons {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .clock {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .icon {
      margin: 40px 150px;
      height: 80px;
    }
    .description {
      color: rgb(77, 156, 174);
    }
  }
}
</style>
