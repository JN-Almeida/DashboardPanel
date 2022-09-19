import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { Container, InfosLeft, LogoutButton, Menu, Wrapper } from "./styles";

export default function Header() {
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
          Fulano de tal
          <LogoutButton>
            <FiLogOut size={17} />
          </LogoutButton>
        </InfosLeft>
      </Wrapper>
    </Container>
  )
}