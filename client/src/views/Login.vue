<template>
  <div class="login">
    <img src="../assets/imgs/7.jpg" alt class="login-img" />

    <div class="login-options">
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
      <div class="login-creat">
        <button class="btn-new-acount">
          <router-link to="/signup/">Create acount</router-link>
        </button>
      </div>
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
          if (res === null) {
            this.isWrong = true;
          }
          const { userName } = JSON.parse(JSON.stringify(res));
          if (res.type === 'Driver') {
            console.log('dispach', res);
            this.$store.dispatch({ type: 'loadAllOrders' });
          }
          if (userName.length) {
            this.isWrong = false;
            this.$router.push({ path: '/' });
          }
        });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.login {
  .login-img {
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(85%);
    filter: contrast(80%);
    filter: grayscale(50%);
  }
  .login-options {
    margin-top: 95px;
    width: fit-content;
    height: calc(100vh - 115px);
    margin-left: 15vw;
    padding: 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(202, 202, 202, 0.603);
    border-radius: 4%;
    .form-login {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
      background-color: rgba(42, 42, 42, 0.473);
      margin: 7px 0;
      border-radius: 10px;
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
  }
}
</style>
