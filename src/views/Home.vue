<template>
  <div class="home">
    <h1>Carpark Rate Calculator</h1>
    <Calculator msg="Welcome to the Carpark Rate Calculator"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Calculator from '@/components/Calculator.vue';

export default Vue.extend({
  name: 'home',
  components: {
    Calculator,
  },
});
</script>
