import { AiOutlineLeft } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

import { motion } from "framer-motion";

import { useCart } from "../../contexts/cartContext";
import { Container, Modal } from "./styles";

const Cart = ({ setisOpenCart }) => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((a, b) => a + Number(b.price), 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "absolute" }}
    >
      <Modal>
        <Container>
          <div className="header-cart">
            <button className="back-cart">
              <AiOutlineLeft onClick={() => setisOpenCart(false)} />
            </button>
            <h3>Carrinho</h3>
          </div>
          <div className="container-itens">
            <>
              <div className="desconto">
                <p>
                  Gaste mais R$ 50,00 e ganhe <strong>10% de desconto</strong>{" "}
                </p>
              </div>
              {console.log(cart)}
              {cart?.map((item, index, arr) => {
                let restaurantTitle = <></>;

                if (
                  index === 0 ||
                  item.restaurant !== arr[index - 1].restaurant
                ) {
                  restaurantTitle = (
                    <>
                      <h2>{item.restaurant}</h2>
                      <button className="retornar">Retornar para a Loja</button>
                    </>
                  );
                }
                return (
                  <div key={index} className="cart-restaurantes">
                    {restaurantTitle}
                    <div className="card-item">
                      <div className="item">
                        <img src={item.photo_url} alt="" />
                        <div className="info">
                          <p>{item.item}</p>
                          <strong>{`${item.price.toFixed(2)}`}</strong>
                        </div>
                        <div className="quantidade">
                          <button>
                            <FaTrashAlt onClick={() => removeFromCart(index)} />
                          </button>
                          <p>1</p>
                          <button>
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
                <p>{`R$ ${total.toFixed(2)}`}</p>
              </div>
              <div className="frete">
                <p>Frete</p>
                <p>{`R$ ${total.toFixed(2)}`}</p>
              </div>
            </div>
            <div className="finalizar-cart">
              <div className="total">
                <p>Total</p>
                <strong className="soma">{`R$ ${total.toFixed(2)}`}</strong>
              </div>
              <button>Finalizar Pedido</button>
            </div>
          </div>
        </Container>
      </Modal>
    </motion.div>
  );
};

export default Cart;
