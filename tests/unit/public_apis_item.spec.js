import { shallowMount } from '@vue/test-utils';
import FeldmPublicApisItem from '@/components/public_apis/public_apis_item.vue';

const item = {
  "API": "AdoptAPet",
  "Description": "Resource to help get pets adopted",
  "Auth": "apiKey",
  "HTTPS": true,
  "Cors": "yes",
  "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
  "Category": "Animals",
}

describe('FeldmPublicApisItem', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(FeldmPublicApisItem, {
      propsData: {
        item,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders a row cell', () => {
    const tr = wrapper.find('tr');

    expect(tr.exists()).toBe(true);
  });

  it('renders 7 columns', () => {
    const columns = wrapper.findAll('td');

    expect(columns.length).toBe(7);
  });
});
