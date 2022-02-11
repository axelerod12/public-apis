import { shallowMount } from '@vue/test-utils';
import FeldmHeader from '@/components/header/header.vue';

describe('FeldmHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FeldmHeader);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders a nav', () => {
    const nav = wrapper.find('nav');
    expect(nav.exists()).toBe(true);
  });
});
