import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import flag from "../../assets/flag.png";
import HealthyGo from "../../assets/healthygo.png";
import LogoImg from "../../assets/logo.png";
import mobileflag from "../../assets/mobileflag.png";
import { useAuthUserContext } from "../../contexts/authUserContext";
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
  CartBackground,
} from "./styles";

const Header = () => {
  const { user } = useAuthUserContext();

  const [isModalOpen, setisModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setisModalOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

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
      {user ? (
        <Container>
          <Brand>
            <Logo src={LogoImg} alt="Logo" />
            <BrandName src={HealthyGo} alt="brand name" />
          </Brand>
          <Menu onClick={() => setisModalOpen(!isModalOpen)}>
            <HamburguerMenu ref={modalRef} open={isModalOpen}>
              <HamburguerLine className="line-1" />
              <HamburguerLine className="line-2" />
              <HamburguerLine className="line-3" />
            </HamburguerMenu>

            <Paragraph isLoggedIn>
              <p>Sobre nós</p>
              <p>Olá, {user.name}</p>
              <CartBackground>
                <AiOutlineShoppingCart
                  style={{ width: "30px", height: "30px" }}
                />
              </CartBackground>
            </Paragraph>
          </Menu>

          {isModalOpen && <DropDownModal />}
        </Container>
      ) : (
        <Container>
          <Brand>
            <Logo src={LogoImg} alt="Logo" />
            <BrandName src={HealthyGo} alt="brand name" />
          </Brand>
          <Menu onClick={() => setisModalOpen(!isModalOpen)}>
            <HamburguerMenu ref={modalRef} open={isModalOpen}>
              <HamburguerLine className="line-1" />
              <HamburguerLine className="line-2" />
              <HamburguerLine className="line-3" />
            </HamburguerMenu>

            <Paragraph>
              <p>Sobre nós</p>
              <p onClick={() => navigate("/login", { replace: true })}>Login</p>
              <p onClick={() => navigate("/register", { replace: true })}>
                Cadastro
              </p>
            </Paragraph>
          </Menu>

          {isModalOpen && <DropDownModal />}
        </Container>
      )}
    </motion.div>
  );
};

export default Header;
