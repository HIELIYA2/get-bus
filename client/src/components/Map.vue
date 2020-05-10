<template>
  <section class="map">
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
  name: 'Map',
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
.map {
  max-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .header {
  }
  .main {
    .details {
      height: 260px;
      width: 280px;
      background-color: #fff;
    }
  }
  .footer {
  }
}
</style>
