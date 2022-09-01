import { AiOutlineLeft } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

import { Container, Modal } from "./styles";

export {};

const Cart = () => {
  return (
    <Modal>
      <Container>
        <div className="header-cart">
          <button className="back-cart">
            <AiOutlineLeft />
          </button>
          <h3>Carrinho</h3>
        </div>
        <div className="container-itens">
          <div className="desconto">
            <p>
              Gaste mais R$ 50,00 e ganhe <strong>10% de desconto</strong>{" "}
            </p>
          </div>
          <div className="cart-restaurantes">
            <h2>Restaurante da Mamae</h2>
            <button className="retornar">Retornar para a Loja </button>
            <div className="card-item">
              <div className="item">
                <img src="../../assets/prato.png" alt="" />
                <div className="info">
                  <p>X-Burguer</p>
                  <strong>R$ 10,00</strong>
                </div>
                <div className="quantidade">
                  <button>
                    <FaTrashAlt />
                  </button>
                  <p>1</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="item">
                <img src="../../assets/prato.png" alt="" />
                <div>
                  <p>X-Burguer</p>
                  <strong>R$ 10,00</strong>
                </div>
                <div className="quantidade">
                  <button>
                    <FaTrashAlt />
                  </button>
                  <p>1</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-restaurantes">
            <h2>Restaurante da Mamae</h2>
            <button className="retornar">Retornar para a Loja </button>
            <div className="card-item">
              <div className="item">
                <img src="../../assets/prato.png" alt="" />
                <div className="info">
                  <p>X-Burguer</p>
                  <strong>R$ 10,00</strong>
                </div>
                <div className="quantidade">
                  <button>
                    <FaTrashAlt />
                  </button>
                  <p>1</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="item">
                <img src="../../assets/prato.png" alt="" />
                <div>
                  <p>X-Burguer</p>
                  <strong>R$ 10,00</strong>
                </div>
                <div className="quantidade">
                  <button>
                    <FaTrashAlt />
                  </button>
                  <p>1</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rodape-cart">
          <div className="info-total">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>R$ 105,00</p>
            </div>
            <div className="frete">
              <p>Frete</p>
              <p>R$ 20,00</p>
            </div>
          </div>
          <div className="finalizar-cart">
            <div className="total">
              <p>Total</p>
              <strong className="soma"> R$ 100,00</strong>
            </div>
            <button>Finalizar Pedido</button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default Cart;