import React from 'react';
import User from './User';
import Form from './styles/Form';

const Me = () => (
  <User>
    {({ data: { me } }) => (
      <Form>
        <fieldset>
          <h3>User : {me.name}</h3>
          <p>Email : {me.email}</p>
        </fieldset>
      </Form>
    )}
  </User>
);

export default Me;
