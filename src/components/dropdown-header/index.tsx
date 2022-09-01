import { BsBoxArrowRight } from "react-icons/bs";
import { BsFilePersonFill } from "react-icons/bs";
import { FaRunning, FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

import { motion } from "framer-motion";

import { useAuthUserContext } from "../../contexts/authUserContext";
import { Container, Menu, Arrow } from "./styles";

const DropDownModal = () => {
  const { user } = useAuthUserContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: ["-125px", "-110px"] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "absolute", right: 0 }}
    >
      <Container>
        <Arrow />
        {user ? (
          <>
            <Menu>
              <FaPencilAlt style={{ color: "black" }} />
              <p>Editar Perfil</p>
            </Menu>
            <Menu>
              <FaRunning style={{ color: "black" }} />
              <p>Sair</p>
            </Menu>
          </>
        ) : (
          <>
            <Menu>
              <BsBoxArrowRight style={{ color: "black" }} />
              <p>Login</p>
            </Menu>
            <Menu>
              <BsFilePersonFill style={{ color: "black" }} />
              <p>Cadastro</p>
            </Menu>
            <Menu>
              <HiUserGroup style={{ color: "black" }} />
              <p>Sobre nós</p>
            </Menu>
          </>
        )}
      </Container>
    </motion.div>
  );
};

export default DropDownModal;
