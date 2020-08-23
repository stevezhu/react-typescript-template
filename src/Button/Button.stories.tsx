// Also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type {Story, Meta} from '@storybook/react/types-6-0';
import React from 'react';
import {Button, ButtonProps} from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Press',
};
