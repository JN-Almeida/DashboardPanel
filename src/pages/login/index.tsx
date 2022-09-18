import { Container, ContainerLogin, LoginLeft, LoginRight } from "./styles";
import loginImage from '../../assets/screen-login.svg'
import { Input } from "../../components/Input";
import Button from "../../components/Button";

export function Login() {
  return (
    <Container>
      <ContainerLogin>
        <LoginLeft>
          <img src={loginImage} alt="Login" />
        </LoginLeft>
        <LoginRight>
          <h1>Login</h1>
          <Input type="text" label="Email" />
          <Input type="password" label="Senha" />

          <Button type="solid" onClick={() => {}}>
            Entrar
          </Button>
          <Button type="empty" onClick={() => {}}>
            Esqueci minha senha
          </Button>
        </LoginRight>
      </ContainerLogin>
    </Container>
  )
}