<template>
  <section class="information">
    <header class="header"></header>

    <main class="main items">
      <div class="details">
        <h1>{{ msg }}</h1>
      </div>
    </main>

    <footer class="footer"></footer>
  </section>
</template>

<script>
export default {
  name: 'Details',
  props: {
    msg: String,
  },
  data() {
    return {
      list: ['null', 'pop', 'lol', 'kok', 'hoh', 'mom', 'bob'],
    };
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
.information {
  max-height: 100vh;
  display: flex;
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
