import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(var(--text-black), 0.32);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 28%;
  height: 100%;

  background-color: rgba(var(--light-background-color), 1);
  box-shadow: 0 0 0.5em rgba(var(--text-black), 0.7);

  .container-itens {
    overflow-y: auto;
    height: 69%;
    margin-top: 3rem;
  }

  .carrinho-vazio {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 8rem 1rem;

    img {
      width: 105px;
    }

    p {
      margin-top: 1rem;
    }
  }

  .header-cart {
    position: fixed;
    display: flex;
    align-items: center;

    width: 100%;

    padding: 1rem;
    gap: 1rem;

    background-color: rgba(var(--light-background-color), 1);
    box-shadow: 0 0 1em 0 rgba(var(--text-black), 0.7);

    .back-cart svg {
      color: rgba(var(--brand-green), 1);
      font-size: 20px;
    }
  }

  .desconto {
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-radius: 5px;
    margin: 5rem 2rem 0 2rem;

    background-color: rgba(var(--brand-green), 0.2);
    color: rgba(var(--brand-green), 1);
  }

  .cart-restaurantes {
    display: flex;
    flex-direction: column;

    margin: 1rem;
    padding: 0.5rem;

    .divider {
      margin-bottom: 38px;
    }

    h2 {
      font-size: 120%;
      margin-bottom: 0.5rem;
    }

    .retornar {
      width: 8rem;
      margin-bottom: 2rem;
    }

    .retornar:hover {
      color: rgba(var(--brand-green), 1);
    }

    .card-item {
      display: flex;
      margin-bottom: 1rem;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        gap: 1rem;

        img {
          max-width: 100px;
          max-height: 80px;
        }
        .info {
          p {
            font-size: 13px;
            margin-bottom: 0.2rem;
          }
        }

        .quantidade {
          display: flex;
          align-items: center;
          padding: 0 1rem;
          height: 1.8rem;

          gap: 1.5rem;
          background-color: rgba(var(--text-black), 0.1);
          border-radius: 4px;

          button {
            background-color: transparent;
          }

          svg {
            margin: 0;
            color: rgba(var(--brand-green), 1);
            font-size: 12px;
          }
        }
      }
    }
  }

  .rodape-cart {
    position: fixed;
    top: 80%;
    width: 26%;
    background-color: rgba(var(--light-background-color), 1);
  }

  .info-total {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0 1rem;

    border-top: 1px solid rgba(var(--text-black), 1);

    .subtotal {
      display: flex;
      justify-content: space-between;
      margin-top: 0.3rem;
    }

    .frete {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
    }

    .descontoTotal {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .total {
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  .finalizar-cart {
    display: flex;
    margin: 1rem;
    justify-content: space-between;
  }

  .divider {
    height: 2px;
    background-color: rgba(var(--gray), 1);
  }

  @media screen and (max-width: 950px) {
    width: 45%;
    .rodape-cart {
      width: 45%;
    }
  }

  @media screen and (max-width: 560px) {
    width: 80%;

    .rodape-cart {
      width: 80%;
    }
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    .rodape-cart {
      width: 100%;
    }
  }
`;

export const DiscountBar = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(var(--brand-green), 1);

  .discount-variable {
    width: ${({ width }) => `${width}%`};
    height: 4px;

    background-color: rgba(var(--brand-light-green), 1);
  }
`;
