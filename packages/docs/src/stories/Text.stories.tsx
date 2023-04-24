import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@altitude-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita eligendi qui similique doloremque corrupti voluptatum. Itaque perspiciatis fugiat magni ipsam facere. Quae vero quasi minus doloremque, aut vitae recusandae incidunt!',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
