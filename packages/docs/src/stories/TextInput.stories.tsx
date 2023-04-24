import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from '@altitude-ui/react';
import { Search } from 'lucide-react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: { },
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Placeholder...',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: () => (
      <Search size={24} color="#FFF" style={{ marginRight: '0.5rem' }} />
    ),
  },
};
