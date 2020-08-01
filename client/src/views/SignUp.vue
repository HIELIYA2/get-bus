<template>
  <div class="sign-up">
    <img src="../assets/imgs/7.jpg" alt class="sign-up-img" />

    <form class="form-sign-up" @submit.prevent="submit">
      <div class="up-in-toggle">
        <input
          type="radio"
          id="switch_left"
          name="switch_2"
          value="Rider"
          v-model="user.type"
          checked
        />
        <label for="switch_left">Rider</label>
        <input
          type="radio"
          id="switch_right"
          name="switch_2"
          v-model="user.type"
          value="Driver"
        />
        <label for="switch_right">Driver</label>
      </div>
      <input
        class="first-name-sign-up"
        v-model="user.firstName"
        placeholder="First name"
        required
      />
      <input
        class="last-name-sign-up"
        v-model="user.lastName"
        placeholder="Last name"
        required
      />
      <input
        class="username-sign-up"
        v-model="user.userName"
        placeholder="Username"
        required
      />
      <input
        class="password-sign-up"
        v-model="user.password"
        placeholder="Password"
        required
      />
      <input
        class="email-sign-up"
        :class="{ wrong: isWrongEmail }"
        @input="validateEmail"
        v-model="user.email"
        placeholder="Email"
        required
      />
      <button class="btn-sign-up" type="submit">Check in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      user: {
        type: 'Rider',
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        stock: [],
      },
      isWorng: false,
      isWrongEmail: false,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    validateEmail() {
      this.isWrongEmail = !this.reg.test(this.user.email);
    },
    submit() {
      console.log(this.user);
      if (!this.isWrongEmail) {
        this.$store
          .dispatch({
            type: 'signup',
            user: this.user,
          })
          .then((user) => {
            if (!user) {
              this.isWorng = true;
            } else {
              this.isWorng = false;
              this.$router.push({ path: '/' });
            }
          });
      }
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.sign-up {
  // margin-top: calc(50vh - 170px);
  .sign-up-img {
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
  .sign-up-img {
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .form-sign-up {
    margin-top: 95px;
    width: fit-content;
    height: calc(100vh - 115px);
    margin-left: 15vw;
    padding: 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(209, 207, 207, 0.356);
    border-radius: 4%;
    .up-in-toggle {
      padding: 10px 0;
      input {
        clip: rect(0, 0, 0, 0);
        height: 0.1px;
        width: 0.1px;
        border: 0;
        overflow: hidden;
        &:checked + label {
          background: rgb(139, 200, 254);
          background: linear-gradient(
            0deg,
            rgb(139, 200, 254) 0%,
            rgba(139, 200, 254, 1) 100%
          );
          color: white;
          font-weight: 500;
          box-shadow: 0 7px 20px rgba(0, 0, 0, 0.09),
            0 6px 6px rgba(0, 0, 0, 0.13);
        }
      }
      label {
        display: inline-block;
        width: 100px;
        background-color: rgba(42, 42, 42, 0.473);
        color: rgb(165, 173, 183);
        text-align: center;
        font-size: 0.8rem;
        padding: 6px 6px;
        float: left;
        transition: all 0.1s ease-in-out;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .up-in-toggle label:first-of-type {
    border-radius: 15.5px 0 0 15.5px;
  }

  .up-in-toggle label:last-of-type {
    border-radius: 0 15.5px 15.5px 0;
  }
  .first-name-sign-up,
  .last-name-sign-up,
  .username-sign-up,
  .password-sign-up,
  .btn-sign-up,
  .email-sign-up {
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
  .first-name-sign-up::placeholder,
  .last-name-sign-up::placeholder,
  .username-sign-up::placeholder,
  .password-sign-up::placeholder,
  .email-sign-up::placeholder {
    color: rgba(255, 255, 255, 0.685);
  }
  .btn-sign-up {
    cursor: pointer;
    transition: 0.3s;
    background-color: #8dc9fe;
  }
  .btn-sign-up:hover {
    background-color: #63b3fa;
    color: rgb(255, 255, 255);
  }
  .wrong {
    border: 2px solid red;
  }
}
</style>
