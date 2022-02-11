import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import FeldmPublicApisFilter from '@/components/public_apis/public_apis_filter.vue';

const mockCategoriesList = {
  data: {
    categories: [
      'Animals',
      'Anime',
    ],
  },
};

// Following lines tell Jest to mock any call to `http.get`
// and to return `mockApiList` instead
jest.mock('axios', () => ({
  get: () => Promise.resolve(mockCategoriesList),
}));

describe('FeldmPublicApisFilter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FeldmPublicApisFilter);
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

  it('renders a select', () => {
    const select = wrapper.find('select');

    expect(select.exists()).toBe(true);
  });

  it('uses a mocked axios HTTP call when created', async () => {
    // Axios promise is resolved immediately.
    await flushPromises();

    expect(wrapper.vm.categories.length).toBe(2);
  });

  it('sets a value', async () => {
    const select = wrapper.find('select');

    await select.setValue('Animals');

    expect(select.element.value).toBe('Animals');

    // Wait until $emits have been handled.
    await wrapper.vm.$nextTick();

    // Assert event has been emitted.
    expect(wrapper.emitted('input')).toBeTruthy();
  });
});
