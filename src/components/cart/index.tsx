import { AiOutlineLeft } from "react-icons/ai";

import { Container } from "./styles";

export {};

const Cart = () => {
  return (
    <Container>
      <div>
        <button>
          <AiOutlineLeft />
        </button>
        <h3>Carrinho</h3>
      </div>
    </Container>
  );
};

export default Cart;
