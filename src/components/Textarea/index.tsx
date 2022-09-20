import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  Error,
  Label,
  Container,
  TextareaDefaul,
} from './styles';

type Props = {
  label?: string;
  name: string;
  error?: any;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  rows: string;
};

const TextareaBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, name, error, ...rest },
  ref
) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextareaDefaul ref={ref} name={name} {...rest}></TextareaDefaul>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export const Textarea = forwardRef(TextareaBase);
