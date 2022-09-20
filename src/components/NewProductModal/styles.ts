import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Overlay)`
  max-width: 400px;
  border-radius: 5px;
  padding: 30px;
  background: var(--White-color);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 618px) {
    width: 80vw ;
  }
`

export const CloseButtom = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  line-height: 0;
  cursor: pointer;
  color: var(--primary-color);
  font-size: 18px;
`
export const Form = styled.form`
  margin-top: 30px;
`
