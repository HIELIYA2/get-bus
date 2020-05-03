<template>
  <div class="board">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
