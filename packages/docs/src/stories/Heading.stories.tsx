import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@altitude-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Title',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
};
