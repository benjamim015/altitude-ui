import React, { ComponentProps } from 'react';
import { keyframes, styled } from '../styles';

export const StyledButton = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  padding: '0 $4',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$red500',

        '&:not(:disabled):hover': {
          backgroundColor: '$red300',
        },

        '&:disabled': {
          backgroundColor: '$gray500',
        },
      },

      secondary: {
        color: '$red500',
        border: '2px solid $red500',

        '&:not(:disabled):hover': {
          backgroundColor: '$red500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray300',
          borderColor: '$gray300',
        },
      },
    },

    size: {
      sm: {
        height: 40,
      },
      md: {
        height: 48,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

const spinner = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const Spinner = styled('div', {
  width: '16px',
  height: '16px',
  border: '4px solid $red300',
  borderTop: '4px solid $red500',
  borderRadius: '50%',
  animation: `${spinner} 1s linear infinite`,
});

export type ButtonProps = ComponentProps<typeof StyledButton> & {
  children: React.ReactNode
  isLoading?: boolean;
}

export function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <StyledButton {...props}>
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
}
