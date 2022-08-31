import { AiOutlineLeft } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

import { Container, Modal } from "./styles";

export {};

const Cart = () => {
  return (
    <Modal>
      <Container>
        <div className="header-cart">
          <button>
            <AiOutlineLeft />
          </button>
          <h3>Carrinho</h3>
        </div>
        <div className="desconto">
          <p>
            Gaste mais R$ 50,00 e ganhe <strong>10% de desconto</strong>{" "}
          </p>
        </div>
        <div className="cart-restaurantes">
          <h2>Restaurante da Mamae</h2>
          <button>Retornar para a Loja </button>
          <div className="card-item">
            <div>
              <img src="../../assets/prato.png" alt="" />
              <div>
                <p>X-Burguer</p>
                <strong>R$ 10,00</strong>
              </div>
              <div>
                <button>
                  <FaTrashAlt />
                </button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="card-item">
            <div>
              <img src="../../assets/prato.png" alt="" />
              <div>
                <p>X-Burguer</p>
                <strong>R$ 10,00</strong>
              </div>
              <div>
                <button>
                  <FaTrashAlt />
                </button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-restaurantes">
          <h2>Restaurante da Mamae</h2>
          <button>Retornar para a Loja </button>
          <div className="card-item">
            <div>
              <img src="../../assets/prato.png" alt="" />
              <div>
                <p>X-Burguer</p>
                <strong>R$ 10,00</strong>
              </div>
              <div>
                <button>
                  <FaTrashAlt />
                </button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="card-item">
            <div>
              <img src="../../assets/prato.png" alt="" />
              <div>
                <p>X-Burguer</p>
                <strong>R$ 10,00</strong>
              </div>
              <div>
                <button>
                  <FaTrashAlt />
                </button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default Cart;
