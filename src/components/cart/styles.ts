import styled from "styled-components";
interface IDiscountBarProps {
  width: number;
}

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.32);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 28%;
  height: 100%;

  background-color: white;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.7);

  .container-itens {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: green;
      border-radius: 10px;
    }
  }

  .header-cart {
    position: fixed;
    width: 100%;
    display: flex;
    padding: 1rem;
    gap: 1rem;
    align-items: center;

    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.7);
    background-color: white;

    .back-cart svg {
      color: green;
      font-size: 20px;
    }
  }
  .desconto {
    display: flex;
    padding: 1rem;
    margin: 5rem 2rem 0 2rem;
    border-radius: 5px;
    justify-content: center;

    background-color: rgba(36, 133, 64, 0.2);
    color: rgba(36, 133, 64);
  }
  .cart-restaurantes {
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    margin: 1rem;

    h2 {
      font-size: 120%;
      margin-bottom: 0.5rem;
    }

    .retornar {
      width: 8rem;
      margin-bottom: 2rem;
    }
    .retornar:hover {
      color: rgba(36, 133, 64);
    }
    .card-item {
      display: flex;
      margin-bottom: 1rem;
      .item {
        display: flex;
        width: 100%;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;

        img {
          width: 100px;
        }
        .info {
          p {
            font-size: 13px;
            margin-bottom: 0.2rem;
          }
        }

        .quantidade {
          display: flex;
          gap: 1.5rem;
          padding: 0 1rem;
          height: 1.8rem;

          align-items: center;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;

          button {
            background-color: rgba(0, 0, 0, 0.01);
          }

          svg {
            margin: 0;
            color: rgba(36, 133, 64);
            font-size: 12px;
          }
        }
      }
    }
  }

  .rodape-cart {
    width: 100%;
    margin-top: 1rem;
  }

  .info-total {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0 1rem;

    .subtotal {
      display: flex;
      justify-content: space-between;
    }
    .frete {
      display: flex;
      justify-content: space-between;
    }
  }

  .finalizar-cart {
    display: flex;
    margin: 1rem;
    justify-content: space-between;

    .total {
      gap: 1rem;
    }
    button {
      background-color: rgba(18, 117, 58, 1);
      border-radius: 10px;
      width: 65%;
      color: white;
    }
  }

  .divider {
    height: 2px;
    background-color: black;
  }
  @media screen and (max-width: 950px) {
    width: 45%;
  }
  @media screen and (max-width: 560px) {
    width: 80%;

    .rodape-cart {
      width: 100%;
    }
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const DiscountBar = styled.div`
  height: 4px;
  width: 100%;
  background-color: var(--brand-green);

  .discount-variable {
    width: ${({ width }) => `${width}%`};
    height: 4px;

    background-color: var(--brand-light-green);
  }
`;
