import {useForm, SubmitHandler} from "react-hook-form"
import { Input } from "../../components/Input";
import { AuthContext } from "../../contexts/AuthContext"
import Button from "../../components/Button";
import { Container, ContainerLogin, LoginLeft, LoginRight } from "./styles";
import loginImage from '../../assets/screen-login.svg'
import { useContext } from "react";

type SignInData ={
  email: string;
  password: string;
}


export default function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm()

  const { signIn } = useContext(AuthContext)

  const handleSignin: SubmitHandler<SignInData> = (values, e) => {
    signIn(values)
  }

  return (
    <Container>
      <ContainerLogin>
        <LoginLeft>
          <img src={loginImage} alt="Login" />
        </LoginLeft>
        <LoginRight onSubmit={handleSubmit(handleSignin)}>
          <h1>Login</h1>
          <Input type="email" label="E-mail" {...register('email', {required: 'E-mail obrigatório'})} error={errors?.email?.message} />
          <Input type="password" label="Senha" {...register('password')} />

          <Button type="submit" buttonType="solid" onClick={() => {}}>
            Entrar
          </Button>
          <Button buttonType="empty" type="button" onClick={() => {}}>
            Esqueci minha senha
          </Button>
        </LoginRight>
      </ContainerLogin>
    </Container>
  )
}