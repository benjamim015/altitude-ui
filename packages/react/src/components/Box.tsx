import { ComponentProps } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray500',
  border: '1px solid $gray300',
});

export type BoxProps = ComponentProps<typeof Box> & {}
