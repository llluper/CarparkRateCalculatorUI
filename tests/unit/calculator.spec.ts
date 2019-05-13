import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Calculator from '@/components/Calculator.vue';
import Rate from '@/components/Rate.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Calculator.vue', () => {
  it('renders and contains Rate component', () => {
    const state = {
      entryDate: '',
      exitDate: '',
      result: {
        name: "Standard",
        cost: 1.00
      }
    }
    const store = new Vuex.Store({
      state,
    });
    const wrapper = shallowMount(Calculator, {
      localVue,
      store,
    });
    expect(wrapper.contains(Rate)).toBe(true)
  });
});
