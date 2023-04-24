import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Heading = styled('h2', {
  fontFamily: '$default',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
});

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}
