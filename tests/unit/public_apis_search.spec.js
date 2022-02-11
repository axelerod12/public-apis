import { shallowMount } from '@vue/test-utils';
import FeldmPublicApisSearch from '@/components/public_apis/public_apis_search.vue';

describe('FeldmPublicApisSearch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FeldmPublicApisSearch);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders a label', () => {
    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
  });

  it('renders an input', () => {
    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
  });

  it('sets a value', async () => {
    const input = wrapper.find('input');

    await input.setValue('some value');

    expect(input.element.value).toBe('some value');
  });
});
