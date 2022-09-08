import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import flag from "../../assets/flag.png";
import HealthyGo from "../../assets/healthygo.png";
import LogoImg from "../../assets/logo.png";
import mobileflag from "../../assets/mobileflag.png";
import { IUser, useAuthUserContext } from "../../contexts/authUserContext";
import { useCart } from "../../contexts/cartContext";
import Cart from "../cart";
import { useScrollPosition } from "../cart-header-hooks";
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
  const [isMobile, setMobile] = useState(window.innerWidth < 426);
  const [isOpenCart, setisOpenCart] = useState<boolean>(false);
  const { amountCart } = useCart();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 425);
    setMobile(window.innerWidth < 426);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
        <Link to={"/home"}>
          <Brand>
            <Logo src={LogoImg} alt="Logo" />
            <BrandName src={HealthyGo} alt="brand name" />
          </Brand>
        </Link>
        <Menu>
          {isMobile && (
            <CartBackground
              scrolling={scrollPosition > 0}
              onClick={() => {
                setisOpenCart(true);
              }}
            >
              {amountCart}
              <AiOutlineShoppingCart
                style={{ width: "30px", height: "30px" }}
              />
            </CartBackground>
          )}

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
              return user && Object.keys(user as IUser).length !== 0 ? (
                <Paragraph>
                  <CartBackground
                    onClick={() => setisModalOpen(!isModalOpen)}
                    ref={modalRef}
                  >
                    <p>Olá, {user.name}</p>
                    <MdKeyboardArrowDown />
                  </CartBackground>
                  <CartBackground
                    scrolling={scrollPosition > 0}
                    onClick={() => {
                      setisOpenCart(true);
                    }}
                  >
                    {!!amountCart && <span>{amountCart}</span>}
                    <AiOutlineShoppingCart
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
        </Menu>
        {isOpenCart && <Cart setisOpenCart={setisOpenCart} />}
      </Container>
    </motion.div>
  );
};
export default Header;
