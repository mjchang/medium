import React from 'react';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  args: {
    ...(process.env.NODE_ENV === 'test'
      ? {
          onLogin: () => {},
          onLogout: () => {},
          onCreateAccount: () => {},
        }
      : {}),
  },
  parameters: {
    storyshots: { disable: true },
  },
};

const Template = args => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.parameters = {
  storyshots: { disable: false },
};
