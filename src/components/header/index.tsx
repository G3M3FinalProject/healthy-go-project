import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import flag from "../../assets/flag.png";
import HealthyGo from "../../assets/healthygo.png";
import LogoImg from "../../assets/logo.png";
import mobileflag from "../../assets/mobileflag.png";
import { useAuthUserContext } from "../../contexts/authUserContext";
import Cart from "../cart";
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
  const [isDesktop, setDesktop] = useState(window.innerWidth > 425);
  const [isOpenCart, setisOpenCart] = useState<boolean>(false);
  console.log(isOpenCart);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 425);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
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
      <Container>
        <Brand>
          <Logo src={LogoImg} alt="Logo" />
          <BrandName src={HealthyGo} alt="brand name" />
        </Brand>
        <Menu>
          <HamburguerMenu
            onClick={() => setisModalOpen(!isModalOpen)}
            ref={modalRef}
            open={isModalOpen}
          >
            <HamburguerLine className="line-1" />
            <HamburguerLine className="line-2" />
            <HamburguerLine className="line-3" />
          </HamburguerMenu>
          {(() => {
            if (isDesktop) {
              return user ? (
                <Paragraph>
                  <CartBackground
                    onClick={() => setisModalOpen(!isModalOpen)}
                    ref={modalRef}
                  >
                    <p>Olá, {user.name}</p>
                    <MdKeyboardArrowDown />
                  </CartBackground>
                  <CartBackground>
                    <AiOutlineShoppingCart
                      onClick={() => {
                        setisOpenCart(true);
                      }}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </CartBackground>
                </Paragraph>
              ) : (
                <Paragraph>
                  <p onClick={() => navigate("/aboutus", { replace: true })}>
                    Sobre nós
                  </p>
                  <p onClick={() => navigate("/login", { replace: true })}>
                    Login
                  </p>
                  <p onClick={() => navigate("/register", { replace: true })}>
                    Cadastro
                  </p>
                </Paragraph>
              );
            }
          })()}
          {isModalOpen && <DropDownModal />}
          {/* <Cart /> */}
        </Menu>
      </Container>
    </motion.div>
  );
};
export default Header;
