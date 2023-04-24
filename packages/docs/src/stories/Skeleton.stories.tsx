import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonProps } from '@altitude-ui/react';

export default {
  title: 'Misc/Skeleton',
  component: Skeleton,
  args: {
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px', height: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SkeletonProps>;

export const Primary: StoryObj<SkeletonProps> = {};
