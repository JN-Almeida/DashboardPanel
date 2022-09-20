import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { Container, InfosLeft, LogoutButton, Menu, Wrapper } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { user, signOut } = useContext(AuthContext)
  
  return (
    <Container>
      <Wrapper>
        <Menu>
          <li>
            <Link to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              Produtos
            </Link>
          </li>
        </Menu>

        <InfosLeft>
          <label>
            {user?.name}
          </label>
          <LogoutButton title="Sair" onClick={() => signOut()}>
            <FiLogOut size={17} />
          </LogoutButton>
        </InfosLeft>
      </Wrapper>
    </Container>
  )
}