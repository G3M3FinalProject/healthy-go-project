import { BiBookOpen } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsFilePersonFill } from "react-icons/bs";
import { FaRunning, FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useAuthUserContext } from "../../contexts/authUserContext";
import { Container, Menu, Arrow } from "./styles";

const DropDownModal = () => {
  const { user } = useAuthUserContext();

  const navigate = useNavigate();

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
            <Menu onClick={() => navigate("/profile", { replace: true })}>
              <FaPencilAlt style={{ color: "black" }} />
              <p>Editar perfil</p>
            </Menu>
            <Menu onClick={() => navigate("/aboutus", { replace: true })}>
              <BiBookOpen style={{ color: "black" }} />
              <p>Sobre nós</p>
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
              <p onClick={() => navigate("/login", { replace: true })}>Login</p>
            </Menu>
            <Menu onClick={() => navigate("/register", { replace: true })}>
              <BsFilePersonFill style={{ color: "black" }} />
              <p>Cadastro</p>
            </Menu>
            <Menu onClick={() => navigate("/aboutus", { replace: true })}>
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
