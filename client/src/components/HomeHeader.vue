<template>
  <div class="home-header">
    <!-- <img src="../assets/imgs/11.jpg" alt="" class="home-background" /> -->
    <div class="home-background"></div>
    <div
      class="home-main"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div class="home-title">Get&sdot;bus</div>
      <div class="home-description">
        Statewide Corporate Ground Travel
      </div>
    </div>
    <div class="home-Scroll" @click="scroll()">
      <img class="fade-down" src="../assets/arrow-down.svg" alt="fade-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    msg: String,
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: 737,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home-header {
  height: 100vh;
  padding-top: 75px;
  .home-background {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -10;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: linear-gradient(
        0deg,
        rgb(34, 34, 34) 2%,
        rgba(0, 212, 255, 0) 20%
      ),
      url('../assets/imgs/11.jpg');

    background-size: cover;
  }
  .home-main {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .home-title {
      font-family: Lato_bold;
      z-index: 10;
      font-size: 120px;
      letter-spacing: 15px;
      color: rgb(255, 255, 255);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .home-description {
      font-family: Lato_regular;
      z-index: 10;
      font-size: 24px;
      margin-top: 30px;
      color: rgb(255, 255, 255);
      display: flex;
      justify-content: center;
      align-items: center;
      animation-name: slide-bottom;
    }
  }
  .home-Scroll {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    .fade-down {
      animation: fade-down 1.8s ease-in-out infinite;
      cursor: pointer;
      height: 50px;
      width: 80px;
      line-height: 50px;
      position: absolute;
      left: 50%;
      color: #fff;
      text-align: center;
      font-size: 70px;
      z-index: 100;
      text-decoration: none;
      text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    }
  }
}

@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(20px);
    transform: translateY(4px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(150px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-down {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}
</style>
