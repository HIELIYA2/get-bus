<template>
  <div class="home-fotter">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeFotter',
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
