import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--secundary-color);
  height: 50px;
  width: 100vw;
`

export const Wrapper = styled.div`
  max-width: 1388px;
  margin: 0 auto;
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;

  li{
    font-weight: 700;
    cursor: pointer;
  }
`

export const InfosLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`