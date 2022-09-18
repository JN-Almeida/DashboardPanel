import styled from "styled-components";

export const OutLined = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: #4B0086;
  border: 2px solid #4B0086;
  margin: ${({margin}: any) => 
    margin || '8px 0'
  };
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
  font-family: Inter;
  font-size: 18px;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Solid = styled.button`
  background-color: var(--primary-color);
  color: var(--secundary-color);
  border: none;
  margin: ${({margin}: any) => 
    margin || '8px 0'
  };
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
  font-family: Inter;
  font-size: 18px;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 8px 12px -4px rgba(75, 0, 134, 0.16);

  transition-duration: 0.5s;
  :hover {
    background-color: var(--secundary-color);
    color: var(--primary-color);
  }
`

export const Empty = styled.button`
  background: none;
  color: var(--primary-color);
  border: none;
  margin: ${({margin}: any) => 
    margin || '8px 0'
  };
  cursor: initial !important;
  font-weight: 600;
  font-family: Inter;
  font-size: 18px;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: 0.5s;

  span{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover, &:focus, &:active {
    color: var(--secundary-color);    
  }
`