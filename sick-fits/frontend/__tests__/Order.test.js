import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import Order, { SINGLE_ORDER_QUERY } from '../components/Order';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeOrder } from '../lib/testUtils';

const mocks = [
  {
    request: { query: SINGLE_ORDER_QUERY, varibles: { id: 'ord123' } },
    result: { data: { order: fakeOrder() } },
  },
];

describe('<Order/>', () => {
  it('renders the order', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Order />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const order = wrapper.find('div[data-test="order"]');
    expect(toJSON(order)).toMatchSnapshot();
  });
});
