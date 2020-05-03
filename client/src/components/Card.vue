<template>
  <section class="card">
    <header class="header"></header>

    <main class="main">
      <div class="title-card">{{card}}</div>
    </main>

    <footer class="footer"></footer>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.card {
  padding: 4px;
  min-width: 270px;
  max-width: 270px;
  min-height: 150px;
  max-height: 250px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  margin: 0.7px 3px;
  box-shadow: 0px 5px 6px -4px rgba(0, 0, 0, 0.4);
  border-bottom: 0.9px solid rgb(167, 165, 165);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.2s;
  &:hover {
    background-color: rgb(250, 250, 250);
  }
}
</style>
