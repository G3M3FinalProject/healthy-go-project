import { BsBoxArrowRight } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";

import { Container, Menu, Arrow } from "./styles";

const DropDownModal = () => {
  return (
    <Container>
      <Arrow />
      <Menu>
        <BsBoxArrowRight />
        <p>Editar Perfil</p>
      </Menu>
      <Menu>
        <FaRunning />
        <p>Sair</p>
      </Menu>
    </Container>
  );
};

export default DropDownModal;
