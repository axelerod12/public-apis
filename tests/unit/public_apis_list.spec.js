import { shallowMount } from '@vue/test-utils';
import FeldmPublicApisList from '@/components/public_apis/public_apis_list.vue';

const apis = [
  { "API": "AdoptAPet", "Description": "Resource to help get pets adopted", "Auth": "apiKey", "HTTPS": true, "Cors": "yes", "Link": "https://www.adoptapet.com/public/apis/pet_list.html", "Category": "Animals" },
  { "API": "Axolotl", "Description": "Collection of axolotl pictures and facts", "Auth": "", "HTTPS": true, "Cors": "no", "Link": "https://theaxolotlapi.netlify.app/", "Category": "Animals" }
];

describe('FeldmPublicApisList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FeldmPublicApisList, {
      propsData: {
        apis,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
