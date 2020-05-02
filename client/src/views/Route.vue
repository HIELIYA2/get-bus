<template>
  <div class="route">
    <form class="form-route" @submit.prevent="submit">
      <input
        class="route-size"
        v-model="plan.size"
        placeholder="size"
        required
      />
      <input
        class="route-trip-start"
        v-model="plan.tripStart"
        type="date"
        name="trip-start"
        required
      />
      <input
        id="searchTextField"
        class="route-trip-end"
        v-model="plan.tripEnd"
        type="date"
        name="trip-end"
        required
      />
      <input
        class="route-position-start"
        id="searchTextField"
        type="text"
        size="50"
        placeholder="Enter a position-start"
        autocomplete="on"
        v-model="plan.positionStart"
        runat="server"
        required
      />
      <input type="hidden" id="city2" name="city2" />
      <input type="hidden" id="cityLat" name="cityLat" />
      <input type="hidden" id="cityLng" name="cityLng" />

      <input
        class="route-position-end"
        id="searchTextField"
        type="text"
        size="50"
        placeholder="Enter a position-end"
        v-model="plan.positionEnd"
        autocomplete="on"
        runat="server"
        required
      />
      <input type="hidden" id="city2" name="city2" />
      <input type="hidden" id="cityLat" name="cityLat" />
      <input type="hidden" id="cityLng" name="cityLng" />

      <button class="route-submit" type="submit">Check in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Route',
  data() {
    return {
      plan: {
        size: null,
        tripStart: '',
        tripEnd: '',
        positionStart: '',
        positionEnd: '',
        return: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.route {
  margin-top: 96px;
  min-height: 100vh;
  .form-route {
    display: flex;
    flex-direction: column;
    .route-size,
    .route-trip-start,
    .route-trip-end,
    .route-position-start,
    .route-position-end,
    .route-submit {
      font-size: 18px;
      font-family: PontanoSans-Regular;
      padding: 15px;
      width: 350px;
      height: 50px;
      border: 0px solid rgb(31, 31, 31);
      color: rgb(255, 255, 255);
      background-color: rgba(61, 61, 61, 0.274);
      margin: 7px 0;
      border-radius: 50px;
    }
  }
}
</style>
