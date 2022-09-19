import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'
import { Error, Label, InputDefault, Container } from './styles';

type Props = {
  mask?: string;
  label?: string;
  name: string;
  type: string;
  error?: any;
  disabled?: boolean;
  placeholder?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, name, error, ...rest },
  ref
) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputDefault ref={ref} name={name} {...rest}  />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
