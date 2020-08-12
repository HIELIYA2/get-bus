<template>
  <section class="navigation-bar">
    <div class="logo">
      <router-link to="/" class="logo1">
        <div>
          <img src="../assets/imgs/8.png" alt class="logo-img" />
        </div>
      </router-link>
    </div>
    <div class="navigation">
      <router-link class="nav-btns" to="/about" title="About"
        >About</router-link
      >
      <router-link v-if="user && user._id" class="nav-btns" to="/private"
        >Private</router-link
      >
      <router-link class="nav-btns" to="/login">
        <div v-if="user && user._id" class="nav-btns nav-log" @click="logout()">
          logout
        </div>
        <div v-else class="nav-btns nav-log">Login</div>
      </router-link>
    </div>
  </section>
</template>

<script>
/*
eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
*/
export default {
  name: 'NavigationBar',
  data() {
    return {};
  },
  computed: {
    user: {
      get() {
        if (this.$store.getters.isUserLoggedIn) {
          return this.$store.getters.loggedInUser;
        }
        return null;
      },
      set(user) {
        this.$store.commit('setUser', user);
      },
    },
  },

  methods: {
    logout() {
      this.$store.dispatch({
        type: 'logout',
        userId: this.user._id,
      });
      this.$store.dispatch({
        type: 'resetOrder',
        isReset: true,
      });
    },
  },
  components: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  font-family: NanumGothic-Regular;
  background: rgba(0, 0, 0, 0.705);
  position: fixed;
  width: 100%;
  height: 75px;
  top: 0;
  padding: 4px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  .logo {
    .logo1 {
      .logo-img {
        height: 150px;
      }
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    .nav-btns {
      font-size: 20px;
      border-radius: 4px;
      padding: 5px;
      margin-right: 3px;
      min-width: 37px;
      transition: 0.3s;
      color: rgba(86, 180, 201, 0.781);
      &:hover {
        color: rgb(86, 180, 201);
      }
      .nav-log {
        padding: 10px 30px;
        border-radius: 10px;
        border: 1.5px rgba(77, 156, 174, 0.781) solid;
        &:hover {
          border-color: rgb(86, 180, 201);
        }
      }
    }
  }
}
</style>
