<template>
  <div class="board">
    <header class="header">
      <h1>{{ msg }}</h1>
    </header>

    <main class="main">
      <mapq msg="map"></mapq>
      <information msg="information"></information>
    </main>

    <footer class="footer">
      <bottom msg="bottom"></bottom>
    </footer>
  </div>
</template>

<script>
import information from './Information.vue';
import mapq from './Map.vue';
import bottom from './Bottom.vue';

export default {
  name: 'Board',
  props: {
    msg: String,
  },
  components: {
    information,
    mapq,
    bottom,
  },
};
</script>


<style lang="scss" scoped>
.board {
  align-items: center;
  flex-direction: column;

  .header {
    margin: 15px 0;
  }
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .map {
    }
    .information {
    }
  }
  .footer {
    margin: 15px 0;
    display: flex;
    justify-content: center;
    .bottom {
      width: 600px;
      height: 140px;
      background-color: #fff;
    }
  }
}
</style>
