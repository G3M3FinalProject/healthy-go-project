import { useState } from "react";

import { motion } from "framer-motion";

import flag from "../../assets/flag.png";
import HealthyGo from "../../assets/healthygo.png";
import LogoImg from "../../assets/logo.png";
import mobileflag from "../../assets/mobileflag.png";
import DropDownModal from "../dropdown-header";
import {
  Container,
  Flag,
  Source,
  Logo,
  BrandName,
  Brand,
  Menu,
  HamburguerMenu,
  HamburguerLine,
  Paragraph,
} from "./styles";

const Header = () => {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);

  function handleOpenModal() {
    setisModalOpen(true);
  }

  function handleCloseModal() {
    setisModalOpen(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <picture>
        <Source media="(max-width: 425px)" srcSet={mobileflag} />
        <Source media="(min-width: 426px)" srcSet={flag} />
        <Flag src={flag} alt="flag" />
      </picture>
      <Container>
        <Brand>
          <Logo src={LogoImg} alt="Logo" />
          <BrandName src={HealthyGo} alt="brand name" />
        </Brand>
        <Menu onClick={() => setisModalOpen(!isModalOpen)}>
          <HamburguerMenu>
            <HamburguerLine className="line-1" />
            <HamburguerLine className="line-2" />
            <HamburguerLine className="line-3" />
          </HamburguerMenu>

          <Paragraph>
            <p>Sobre nós</p>
            <p>Login</p>
            <p>Cadastro</p>
          </Paragraph>
        </Menu>

        {isModalOpen && <DropDownModal />}
      </Container>
    </motion.div>
  );
};

export default Header;
