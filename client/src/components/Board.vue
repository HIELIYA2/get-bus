<template>
  <div class="board" v-if="user._id">
    <main class="main">
      <list class="list" :user="this.user" />
      <information
        class="information"
        msg="information"
        :user="this.user"
      ></information>
      <!-- <bottom class="bottom" msg="bottom"></bottom> -->
    </main>
  </div>
</template>

<script>
import list from '@/components/List.vue';
import information from './Information.vue';
import bottom from './Bottom.vue';

export default {
  name: 'Board',
  props: {
    user: Object,
  },
  components: {
    information,
    bottom,
    list,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.board {
  background-color: rgba(206, 206, 206, 0.541);
  align-items: center;
  flex-direction: column;
  padding: 30px 40px;
  border-radius: 7px;
  font-family: Raleway-Regular;

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
