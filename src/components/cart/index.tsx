import { useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineMinus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useCart } from "../../contexts/cartContext";
import { Container, DiscountBar, Modal } from "./styles";

const Cart = ({ setisOpenCart }) => {
  const {
    cart,
    freightCart,
    addOneProduct,
    minusOneProduct,
    totalCart,
    subTotalCart,
  } = useCart();
  const priceToDiscount = 80 - totalCart;
  const hasDiscount = 80 - totalCart >= 0;
  const modalRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleOutClick(event) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        setisOpenCart(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      style={{ position: "absolute" }}
    >
      <Modal>
        <Container ref={modalRef}>
          <div className="header-cart">
            <button className="back-cart" onClick={() => setisOpenCart(false)}>
              <AiOutlineLeft />
            </button>
            <h3>Carrinho</h3>
          </div>
          <div className="container-itens">
            <>
              <div className="desconto">
                {hasDiscount ? (
                  <div>
                    <p>
                      Gaste mais R$ {priceToDiscount.toFixed(2)} e ganhe
                      <strong> 10% de desconto</strong>
                    </p>
                    <DiscountBar width={100 - (priceToDiscount / 80) * 100}>
                      <div className="discount-variable"></div>
                    </DiscountBar>
                  </div>
                ) : (
                  <p>
                    Parabéns! Você ganhou <strong>10% de desconto</strong>
                  </p>
                )}
              </div>
              {cart?.map((item, index, arr) => {
                let restaurantTitle = <></>;

                if (
                  index === 0 ||
                  item.restaurant !== arr[index - 1].restaurant
                ) {
                  restaurantTitle = (
                    <>
                      {index === 0 ? <></> : <div className="divider"></div>}
                      <h2>{item.restaurant}</h2>
                      <button className="retornar">Retornar para a Loja</button>
                    </>
                  );
                }
                return (
                  <div key={item.id} className="cart-restaurantes">
                    {restaurantTitle}
                    <div className="card-item">
                      <div className="item">
                        <img src={item.photo_url} alt="" />
                        <div className="info">
                          <p>{item.item}</p>
                          <strong>{`${item.price.toFixed(2)}`}</strong>
                        </div>
                        <div className="quantidade">
                          <button onClick={() => minusOneProduct(item.id)}>
                            {item.amount === 1 ? (
                              <FaTrashAlt />
                            ) : (
                              <AiOutlineMinus />
                            )}
                          </button>
                          <p>{item.amount}</p>
                          <button onClick={() => addOneProduct(item.id)}>
                            <MdAdd />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
          <div className="rodape-cart">
            <div className="info-total">
              <div className="subtotal">
                <p>Subtotal</p>
                <p>{`R$ ${subTotalCart.toFixed(2)}`}</p>
              </div>
              <div className="frete">
                <p>Frete</p>
                <p>{`R$ ${freightCart.toFixed(2)}`}</p>
              </div>
            </div>
            <div className="finalizar-cart">
              <div className="total">
                <p>Total</p>
                <strong className="soma">{`R$ ${totalCart.toFixed(2)}`}</strong>
              </div>
              <button
                onClick={() => {
                  if (totalCart > 0) {
                    navigate("/checkout", { replace: true });
                    setisOpenCart(false);
                  }
                }}
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </Container>
      </Modal>
    </motion.div>
  );
};

export default Cart;
