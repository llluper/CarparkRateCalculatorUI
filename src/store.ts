import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface StateType {
  entryDate: string;
  exitDate: string;
  result: any;
}

export default new Vuex.Store({
  state: {
    entryDate: '',
    exitDate: '',
    result: { name: '', cost: 0.00 },
  },
  mutations: {
    saveEntryDate(state: StateType, date: string) {
      state.entryDate = date;
    },
    saveExitDate(state: StateType, date: string) {
      state.exitDate = date;
    },
    saveResult(state: StateType, result: any) {
      state.result = result;
    },
  },
  actions: {
    saveEntryDate: ({ commit }, payload: string) => commit('saveEntryDate', payload),
    saveExitDate: ({ commit }, payload: string) => commit('saveExitDate', payload),
    saveResult: ({ commit }, payload: any) => commit('saveResult', payload),
  },
});
