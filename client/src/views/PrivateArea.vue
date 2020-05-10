<template>
  <div class="private">
    <board class="board" msg="board" />
    <list class="list" msg="your orders" />
  </div>
</template>

<script>
import board from '@/components/Board.vue';
import list from '@/components/List.vue';

export default {
  name: 'Private',
  components: {
    board,
    list,
  },
  data() {
    return {
      plan: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.private {
  margin-top: 96px;
  min-height: calc(100vh - 96px);
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .board {
    min-height: 75vh;
    width: 60%;
    background-color: rgba(39, 0, 78, 0.329);
  }
  .list {
    width: 25vw;
    min-height: 75vh;
    background-color: rgba(107, 51, 153, 0.274);
  }
}
</style>
