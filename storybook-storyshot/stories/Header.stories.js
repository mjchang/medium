import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  args: {
    ...(process.env.NODE_ENV === 'test'
      ? {
          onLogin: () => {},
          onLogout: () => {},
          onCreateAccount: () => {},
        }
      : {}),
  },
};

const Template = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
