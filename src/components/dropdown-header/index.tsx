import { BiBookOpen } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsFilePersonFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { FaRunning, FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useAuthUserContext } from "../../contexts/authUserContext";
import { useCart } from "../../contexts/cartContext";
import { IProduct } from "../../contexts/restaurantProductsContext";
import { Container, Menu, Arrow } from "./styles";

const DropDownModal = () => {
  const { user, logoutUser } = useAuthUserContext();
  const { setCart } = useAuthUserContext();
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
              <Link to="/profile">
                <p>Editar perfil</p>
              </Link>
            </Menu>
            <Menu>
              <BsHandbagFill style={{ color: "black" }} />
              <Link to="/requests">
                <p>Meus pedidos</p>
              </Link>
            </Menu>
            <Menu onClick={() => navigate("/aboutus", { replace: true })}>
              <BiBookOpen style={{ color: "black" }} />
              <Link to="/aboutus">
                <p>Sobre nós</p>
              </Link>
            </Menu>
            <Menu>
              <FaRunning style={{ color: "black" }} />
              <button
                onClick={() => {
                  logoutUser();
                  setCart([]);
                }}
              >
                Sair
              </button>
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
