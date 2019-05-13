import { shallowMount } from '@vue/test-utils';
import Rate from '@/components/Rate.vue';

describe('Rate.vue', () => {
  it('renders correct props when passed', () => {
    const name = "Standard";
    const cost = 10.00;
    
    const wrapper = shallowMount(Rate, {
      propsData: { name, cost },
    });
    expect(wrapper.props().name).toBe("Standard")
    expect(wrapper.props().cost).toBe(10.00)
  });

  it('does not render Special tag when passed standard rate', () => {
    const name = "Standard";
    const cost = 10.00;

    const wrapper = shallowMount(Rate, {
      propsData: { name, cost },
    });
    expect(wrapper.find('.special-tag').exists()).toBe(false)
  });

  it('renders Special tag when passed special rate', () => {
    const name = "Night";
    const cost = 6.50;

    const wrapper = shallowMount(Rate, {
      propsData: { name, cost },
    });
    expect(wrapper.find('.special-tag').text()).toBe("SPECIAL")
  });
});
