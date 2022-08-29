import { motion } from "framer-motion";

import flag from "../../assets/flag.png";
import LogoImg from "../../assets/logo.png";
import { Container, Flag, Logo, Brand, Menu } from "./styles";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Flag src={flag} alt="flag" />
      <Container>
        <Brand>
          <Logo src={LogoImg} alt="Logo" />
          <h1>Healthy Go</h1>
        </Brand>
        <Menu>
          <p>Sobre Nós</p>
          <p>Login</p>
          <p>Cadastro</p>
        </Menu>
      </Container>
    </motion.div>
  );
};

export default Header;
