import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@altitude-ui/react';

export default {
  title: 'Shape/Box',
  component: Box,
  args: {
    children: (
      <Text>Testando Box</Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
