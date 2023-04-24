import { ComponentProps } from 'react';
import { keyframes, styled } from '../styles';

const skeleton = keyframes({
  '0%': {
    backgroundPosition: '0% 0%',
  },
  '100%': {
    backgroundPosition: '-140% 0%',
  },
});

export const Skeleton = styled('div', {
  borderRadius: '$md',
  width: '100%',
  height: '100%',
  linearGradient: '90deg, $gray500 0%, $gray300 50%, $gray500 100%',
  backgroundSize: '400% 400%',
  animation: `${skeleton} 1.4s linear infinite`,
});

export type SkeletonProps = ComponentProps<typeof Skeleton> & {}
