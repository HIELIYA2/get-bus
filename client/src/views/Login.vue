<template>
  <div class="login">
    <img src="../assets/imgs/6.png" alt class="login-img" />

    <div>
      <form class="form-login" @submit.prevent="login">
        <input
          class="username-login"
          :class="{ wrong: isWrong }"
          type="text"
          v-model="user.userName"
          placeholder="Username"
          required
        />
        <input
          class="password-login"
          :class="{ wrong: isWrong }"
          type="password"
          v-model="user.password"
          placeholder="Password"
          required
        />
        <button class="btn-login" type="submit">Log in</button>
      </form>
    </div>
    <div class="login-creat">
      <button class="btn-new-acount">
        <router-link to="/signup/">Create acount</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
      isWrong: false,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({
          type: 'login',
          user: this.user,
        })
        .then((res) => {
          const { userName } = JSON.parse(JSON.stringify(res));
          if (res.type === 'Driver') {
            console.log('dispach', res);
            this.$store.dispatch({ type: 'loadAllOrders' });
          }
          if (userName.length) {
            this.isWrong = false;
            this.$router.push({ path: '/' });
          } else {
            this.isWrong = true;
          }
        });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 75px;
  padding: 120px 0;
  .login-img {
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(65%);
  }
  .form-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .username-login,
  .password-login,
  .btn-login,
  .btn-new-acount {
    font-size: 18px;
    font-family: PontanoSans-Regular;
    padding: 15px;
    width: 350px;
    height: 50px;
    border: 0px solid rgb(31, 31, 31);
    color: rgb(255, 255, 255);
    background-color: rgba(61, 61, 61, 0.274);
    margin: 7px 0;
    border-radius: 50px;
  }
  .username-login::placeholder,
  .password-login::placeholder {
    color: rgba(255, 255, 255, 0.808);
  }
  a {
    color: rgb(255, 255, 255);
    transition: 0.3s;
    padding: 13px 95px;
    border-radius: 50px;
    &:hover {
      color: rgb(255, 255, 255);
    }
  }
  .btn-login,
  .btn-new-acount {
    cursor: pointer;
    transition: 0.3s;
    background-color: #8dc9fe;
  }
  .btn-login:hover,
  .btn-new-acount:hover {
    background-color: #63b3fa;
    color: rgb(255, 255, 255);
  }
  .wrong {
    border: 2px solid red;
  }
  .login-creat {
    display: flex;
    justify-content: center;
  }
}
</style>
