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
      <button class="list-add-card" @click="newCard()">
        Add card
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
    };
  },
  components: {
    card,
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
  .main {
    max-height: 50ex;
    overflow-y: scroll;
  }
}
</style>
