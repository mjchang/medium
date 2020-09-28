/* eslint-disable no-unused-vars */
import React from 'react';

const App = () => {
  /* prettier-ignore */
  const badFormat1 = {
    firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '+1 (234) 567-8900', age: 32, sex: 'male',
  };

  /* prettier-ignore */
  const badFormat2 = {
    firstName: 'John',
    lastName: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '+1 (234) 567-8900', age: 32, sex: 'male',
  };

  const goodFormat = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    phone: '+1 (234) 567-8900',
    age: 32,
    sex: 'male',
  };
  return <h1>Prettier Demo</h1>;
};

export default App;
