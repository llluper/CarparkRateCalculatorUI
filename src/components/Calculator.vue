<template>
  <div>
    <div class="inputs">
      <div class="entry-div">
        <h3>Entry:</h3>
        <VueCtkDateTimePicker v-model="entryDate" />
      </div>
      <div class="exit-div">
        <h3>Exit:</h3>
        <VueCtkDateTimePicker v-model="exitDate" />
      </div>
    </div>
    <div class="button-div">
      <button class="button" @click="calculateRate">Calculate Rate</button>
    </div>
    <Rate v-if="result.cost > 0" :name="result.name" :cost="result.cost"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Rate from '@/components/Rate.vue';

export default Vue.extend({
  name: 'Calculator',
  components: {
    Rate
  },
  computed: {
    valid: {
      get () {
        return this.$store.state.entryDate != '' && this.$store.state.exitDate != ''
      },
    },
    entryDate: {
      get () {
      return this.$store.state.entryDate
      },
      set (value: string) {
        this.$store.commit('saveEntryDate', value)
      },
    },
    exitDate: {
      get () {
        return this.$store.state.exitDate
      },
      set (value: string) {
        this.$store.commit('saveExitDate', value)
      }
    },
    result: {
      get () {
        return this.$store.state.result
      },
      set (value: any) {
        this.$store.commit('saveResult', value)
      }
    },
  },
  data() {
    return {
      link: 'http://localhost:5000/api/ticket',
    };
  },
  methods: {
    calculateRate() {
      if (this.valid) {        
        const data = {
          entry: this.entryDate,
          exit: this.exitDate,
        };

        this.$http.post(this.link, JSON.stringify(data), {}).then((response: any) => {
          this.$store.dispatch('saveResult', response.body);
        }, (error: any) => {
          console.log(error.statusText);
        });
      }
    },
  },
});
</script>

<style scoped lang="scss">
.inputs {
  @media screen and (min-width: 768px) {
    display:flex;
    justify-content: center;
  }
}
.entry-div, .exit-div {
  min-width: 240px;
  padding: 0 20px 20px 20px;
}
.button-div {
  margin-bottom: 40px;
  padding: 20px 0;
}
button {
  background-color: transparent;
  border: #42b983 2px solid;
  border-radius: 3px;
  color: #42b983;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  min-width: 300px;
  padding: 10px;
  text-transform: uppercase;
  &:hover {
    background-color: #42b983;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
}
</style>
