import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <PaginationStyles>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        const { count } = data.itemsConnection.aggregate;
        const pages = Math.ceil(count / perPage);
        return (
          <p>
            Page {props.page} of {pages} !
          </p>
        );
      }}
    </Query>
  </PaginationStyles>
);

export default Pagination;
