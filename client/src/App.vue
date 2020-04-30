<template>
  <div id="app">
    <navigation-bar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './views/NavigationBar.vue';

export default {
  name: 'app',
  props: [],
  components: {
    NavigationBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
