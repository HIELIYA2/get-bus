<template>
  <section class="navigation-bar">
    <div class="logo">
      <router-link to="/" class="logo1">
        <div>
          <span class="logo-get">Get</span>
          <span class="logo-bus">bus</span>
        </div>
      </router-link>
    </div>
    <div class="navigation">
      <router-link class="nav-btns" to="/about" title="About">About</router-link>
      <router-link class="nav-btns" to="/login" title="passenger">Riders</router-link>
      <router-link class="nav-btns" to="/login" title="driver">Drivers</router-link>
      <router-link class="nav-btns" to="/route" title="driver">Route</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavigationBar',
  created() {},
  computed: {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  background: rgba(255, 255, 255, 0.829);
  position: fixed;
  width: 100%;
  height: 96px;
  top: 0;
  padding: 4px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
.logo {
  .logo1 {
    font-size: 30px;
    .logo-get {
      color: rgb(76, 0, 197);
      font-family: Raleway-Regular;
    }
    .logo-bus {
      color: rgb(24, 24, 24);
      font-family: Raleway-Regular;
    }
  }
}
.navigation {
  display: flex;
  align-items: center;
  .nav-btns {
    font-size: 22px;
    border-radius: 4px;
    padding: 5px;
    margin-right: 3px;
    min-width: 37px;
    transition: 0.2s;
    color: rgb(76, 0, 197);
    &:hover {
      color: rgb(31, 0, 82);
    }
  }
}
</style>
