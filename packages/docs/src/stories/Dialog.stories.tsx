import type { Meta, StoryObj } from '@storybook/react';
import {
  DialogProps, Dialog, Text, TextInput,
} from '@altitude-ui/react';

export default {
  title: 'Misc/Dialog',

  component: Dialog,
} as Meta<DialogProps>;

export const Primary: StoryObj<DialogProps> = {
  args: {
    title: 'Title',
    openDialogText: 'Open dialog',
    children: (
      <>
        <Text>Content</Text>
        <TextInput />
      </>
    ),
  },
};
