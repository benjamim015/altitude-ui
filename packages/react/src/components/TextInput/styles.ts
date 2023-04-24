import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray500',
  padding: '$3 $4',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '2px solid $gray500',
  display: 'flex',
  alignItems: 'center',
  cursor: 'text',
  width: '100%',

  '&:has(input:focus)': {
    borderColor: '$red500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray300',
  },
});
