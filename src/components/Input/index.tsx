import { useState } from 'react';
import {
  Error,
  Label,
  InputDefault,
  Container
} from './styles';

type Props = {
  mask?: string;
  label?: string;
  name?: string;
  error?: string;
  helper?: string;
  disabled?: boolean;
  type: string;
  placeholder?: string
};

export function Input({
  label,
  name,
  error,
  ...rest
}: Props) {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  //const maskedProps = props as InputMaskProps;
  return (
    <Container>
      {label && <Label>{label}</Label>}
        <InputDefault {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
