import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = args => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <>
      <Input
        {...args}
        onChange={(...params) => {
          args.onChange(...params);
          setValue(...params);
        }}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});

export const Number = Template.bind({});
Number.args = {
  type: 'number',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Value = Template.bind({});
Value.args = {
  value: 'value',
};
