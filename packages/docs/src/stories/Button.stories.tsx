import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@altitude-ui/react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Submit',
    variant: 'primary',
    size: 'sm',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
