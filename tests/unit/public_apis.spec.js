import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import FeldmPublicApis from '@/components/public_apis/public_apis.vue';

const mockApiList = {
  data: {
    entries: [
      { "API": "AdoptAPet", "Description": "Resource to help get pets adopted", "Auth": "apiKey", "HTTPS": true, "Cors": "yes", "Link": "https://www.adoptapet.com/public/apis/pet_list.html", "Category": "Animals" },
      { "API": "Axolotl", "Description": "Collection of axolotl pictures and facts", "Auth": "", "HTTPS": true, "Cors": "no", "Link": "https://theaxolotlapi.netlify.app/", "Category": "Animals" }
    ],
  },
};

// Following lines tell Jest to mock any call to `http.get`
// and to return `mockApiList` instead
jest.mock('axios', () => ({
  get: () => Promise.resolve(mockApiList),
}));

describe('FeldmPublicApis', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FeldmPublicApis);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render a loading text before data is fetched', async () => {
    await wrapper.setData({
      loading: true,
    });

    expect(wrapper.text()).toMatch(/Loading/);

    await wrapper.setData({
      loading: false,
    });

    expect(wrapper.text()).not.toMatch(/Loading/);
  });

  it('should not render a loading text when something went wrong', async () => {
    await wrapper.setData({
      loading: true,
      error: true,
    });

    expect(wrapper.text()).not.toMatch(/Loading/);
  });

  it('uses a mocked axios HTTP call when created', async () => {
    // Axios promise is resolved immediately.
    await flushPromises();

    expect(wrapper.vm.apis.length).toBe(2);
  });

  it('renders a message when there is no data available', async () => {
    await wrapper.setData({
      apis: [],
    });

    expect(wrapper.text()).toMatch(/No data available/);
  });
});
