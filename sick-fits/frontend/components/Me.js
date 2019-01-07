import React from 'react';
import User from './User';
import Form from './styles/Form';
import Error from './ErrorMessage';

const Me = () => (
  <User>
    {({ data: { me }, error }) => {
      if (error) return <Error error={error} />;
      return (
        <Form>
          <fieldset>
            <h3>User : {me.name}</h3>
            <p>Email : {me.email}</p>
          </fieldset>
        </Form>
      );
    }}
  </User>
);

export default Me;
