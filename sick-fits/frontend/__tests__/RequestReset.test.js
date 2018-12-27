import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import RequestReset, {
  REQUEST_RESET_MUTATION,
} from '../components/RequestReset';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: { email: 'dubois.matthieu@live.be' },
    },
    result: {
      data: { requestReset: { message: 'success', __typename: 'Message' } },
    },
  },
];

describe('<RequestReset/>', () => {
  it('renders dans matches', async () => {
    const wrapper = mount(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    );
    const form = wrapper.find('form[data-test="form"]');
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('calls the mutation', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <RequestReset />
      </MockedProvider>
    );
    wrapper.find('input').simulate('change', {
      target: { name: 'email', value: 'dubois.matthieu@live.be' },
    });
    wrapper.find('form').simulate('submit');
    await wait();
    wrapper.update();
    expect(wrapper.find('p').text()).toContain(
      'Success ! Check your email for a reset link ! '
    );
  });
});
