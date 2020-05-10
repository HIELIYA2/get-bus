<template>
  <section class="bottom">
    <header class="header"></header>

    <main class="main">
      <div class="details">
        <h1>{{ msg }}</h1>
      </div>
    </main>

    <footer class="footer"></footer>
  </section>
</template>

<script>
export default {
  name: 'Bottom',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    newOrder() {
      console.log(' new order');
    },
  },
};
</script>

<style lang="scss" scoped>
.botton {
  max-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .header {
  }
  .main {
    .details {
      height: 260px;
      width: 260px;
      background-color: #fff;
    }
  }
  .footer {
  }
}
</style>
