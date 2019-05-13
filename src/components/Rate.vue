<template>
  <div class="rate">
    <h1 class="name">
      {{ name }} Rate <span v-if="name != 'Standard'" class="special-tag">SPECIAL</span>
    </h1>
    <h1><span class="pay-text">To pay:</span> ${{ cost.toFixed(2) }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Rate',
  props: {
    name: String,
    cost: Number,
  },
});
</script>

<style scoped lang="scss">
.rate {
  margin: 0 auto; 
}
.special-tag {
  color: #f1c40f;
  font-size: 10px;
}
.pay-text {
  font-weight: 100;
}
</style>
