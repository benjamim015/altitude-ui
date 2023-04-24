import * as RDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import React, { } from 'react';
import { Button } from '../Button';
import { styled } from '../../styles';

const DialogOverlay = styled(RDialog.Overlay, {
  backgroundColor: '$black',
  position: 'fixed',
  inset: 0,
  opacity: '0.75',
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: '$default',
  borderRadius: '$md',
  height: 24,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$red500',
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

const DialogContent = styled(RDialog.Content, {
  backgroundColor: '$white',
  borderRadius: '$md',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '750px',
  maxHeight: '85vh',
  padding: '$4',
});

const DialogTitle = styled(RDialog.Title, {
  fontFamily: '$default',
  margin: 0,
  fontWeight: '$regular',
  color: '$red500',
});

export type DialogProps = {
  title?: string;
  openDialogText: string;
  children: React.ReactNode;
}

export function Dialog({ openDialogText, title, children }: DialogProps) {
  return (
    <RDialog.Root>
      <RDialog.Trigger>
        <Button style={{ width: '100%' }}>{openDialogText}</Button>
      </RDialog.Trigger>
      <RDialog.Portal>
        <DialogOverlay />
        <DialogContent>
          {title && <DialogTitle>{title}</DialogTitle>}
          {children}
          <RDialog.Close asChild>
            <IconButton aria-label="close">
              <X size={20} />
            </IconButton>
          </RDialog.Close>
        </DialogContent>
      </RDialog.Portal>
    </RDialog.Root>
  );
}
