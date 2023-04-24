import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Text = styled('p', {
  fontFamily: '$default',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}
