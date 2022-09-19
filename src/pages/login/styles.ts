import styled from 'styled-components'

export const Container = styled.section`
  background-color: #f2f9ff;
  height: 100vh;
  width: 100vw;
`

export const ContainerLogin = styled.div`
  background-color: #fff;
  height: 60vh;
  width: 80vw;
  max-width: 1388px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px #cecece;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`

export const LoginLeft = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 90px 30px 0;
  border-right: solid 1px #cecece;
`
export const LoginRight = styled.form`
  padding: 0 30px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }
`