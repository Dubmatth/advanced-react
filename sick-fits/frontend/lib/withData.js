import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { privateEncrypt } from 'crypto';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data !
    clientState: {
      resolvers: {},
      defaults: {
        cartOpen: true,
      },
    },
  });
}

export default withApollo(createClient);
