import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Button',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  decorators: [
    story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>{story()}</div>
    ),
  ],
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
