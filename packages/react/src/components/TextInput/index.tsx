import {
  ComponentProps, ElementType, useRef,
} from 'react';
import { Input, TextInputContainer } from './styles';

export type TextInputProps = ComponentProps<typeof Input> & {
  icon?: ElementType
}

export function TextInput({ icon: Icon, ...props }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <TextInputContainer onClick={handleFocus}>
      {!!Icon && <Icon />}
      <Input ref={inputRef} {...props} />
    </TextInputContainer>
  );
}
