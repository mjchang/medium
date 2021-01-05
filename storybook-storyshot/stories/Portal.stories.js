import React from 'react';

import { Portal } from './Portal';

export default {
  title: 'Example/Portal',
  component: Portal,
};

const Template = args => <Portal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Content',
};
