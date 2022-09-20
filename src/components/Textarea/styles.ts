import styled from "styled-components";

type Props = {
  size?: string;
}


export const Container = styled.div`
  margin-bottom: 16px;  
  width: 100%;
`
export const TextareaDefaul = styled.textarea`
  width: 100%;
  font-size: 18px;
  padding: 8px; 
  border: 1px solid;
  border-color: var(--secundary-color);
  border-radius: 8px;
  &:disabled::placeholder{
    color: rgba(6, 13, 72, 0.25);
  }
  &:focus, &:active, &:focus-visible {
    border: 1px solid !important;
    border-color: var(--secundari-dark) !important;
    box-shadow: none;
  }


`;

export const Label = styled.label`
  color: rgba(6, 13, 72, 0.6);
  margin: 0;
  font-size: 18px;
`;
export const Error = styled.label`
  color: #E10B31;
  margin: 0;
  font-size: 16px;
`;
