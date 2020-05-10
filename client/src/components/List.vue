<template>
  <section class="list">
    <header class="header">
      <h1>{{ msg }}</h1>
    </header>

    <main class="main items">
      <div v-for="card in list" :key="card._id" class="card">
        <card class="card" :card="card"></card>
      </div>
    </main>

    <footer class="footer">
      <button class="list-add-order" @click="newOrder()">
        Add order
        <i class="fa fa-plus"></i>
      </button>
    </footer>
  </section>
</template>

<script>
import card from '@/components/Card.vue';

export default {
  name: 'List',
  props: {
    msg: String,
  },
  data() {
    return {
      list: ['null', 'pop', 'lol', 'kok', 'hoh', 'mom', 'bob'],
      // list: ['null', 'pop', 'lol'],
    };
  },
  components: {
    card,
  },
  methods: {
    newOrder() {
      console.log(' new order');
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  max-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .header {
    margin: 10px 0;
  }
  .main {
    height: 50vh;
    overflow-y: scroll;
  }
  .footer {
    margin: 10px 0;
    max-height: 200px;
    .list-add-order {
      padding: 10px 0;
      width: 270px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      font-size: 20px;
      color: rgb(82, 82, 82);
      border-radius: 7px;
      border: rgb(0, 0, 0) 1px solid;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: rgb(0, 0, 0);
      }
      .fa-plus {
        color: rgb(48, 47, 47);
      }
    }
  }
}
</style>
