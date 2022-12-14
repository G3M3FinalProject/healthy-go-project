import styled from "styled-components";

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
  width: 100%;

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
      background-color: rgba(150, 240, 169, 1);
      border-radius: 10px;
      height: 15px;
    }
    height: 81%;
    margin-top: 3rem;
  }

  .carrinho-vazio {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem 1rem;
    img {
      margin-bottom: 0.5rem;
      width: 105px;
    }

    p {
      margin-top: 1rem;
      text-align: center;
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
    justify-content: center;
    padding: 1rem;
    border-radius: 5px;
    margin: 2rem 1rem 1rem 1rem;

    background-color: rgba(36, 133, 64, 0.2);
    color: rgba(36, 133, 64);
  }
  .cart-restaurantes {
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    margin: 1rem;

    .divider {
      margin-bottom: 10px;
    }

    h2 {
      font-size: 26px;
      margin-bottom: 0.5rem;
    }

    .retornar {
      color: #434242;
      font-weight: 600;
      font-size: 20px;
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
          width: 70px;
          height: 70px;
          object-fit: cover;
        }
        .info {
          width: 130px;

          p {
            font-size: 0.9rem;
            color: #434242;
            font-weight: 600;
            margin-bottom: 0.2rem;
          }
        }

        .quantidade {
          display: flex;
          align-items: center;
          padding: 0.4rem;
          height: 1.8rem;
          min-width: 100px;
          gap: 1.5rem;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;

          button {
            background-color: rgba(0, 0, 0, 0.01);
          }

          p {
            color: #434242;
            font-weight: 600;
          }
          svg {
            margin: 0;
            color: rgba(36, 133, 64);
            font-size: 14px;
          }
        }
      }
    }
  }

  .rodape-cart {
    position: fixed;
    top: 80%;
    width: 26%;
    background-color: white;
  }

  .info-total {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* margin: 0.5rem 1rem; */
    margin: 0rem 1.5rem 0rem 1.5rem;
    padding-top: 0.5rem;
    border-top: 2px solid #434242;

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

    button {
      font-size: 20px;
      font-weight: 600;
      font-family: "Petrona";
    }
  }

  .divider {
    height: 2px;
    background-color: #434242;
  }

  .rodape-cart {
    width: 100%;
  }

  @media screen and (min-width: 425px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 430px;

    .cart-restaurantes {
      .card-item {
        display: flex;
        margin-bottom: 1rem;
        .item {
          display: flex;
          width: 100%;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;

          .info {
            width: 180px;

            p {
              font-size: 1rem;
              color: #434242;
              font-weight: 600;
              margin-bottom: 0.2rem;
            }
          }

          .quantidade {
            display: flex;
            align-items: center;
            padding: 1rem;
            height: 1.8rem;
            min-width: 116px;

            gap: 1.5rem;
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            button {
              background-color: rgba(0, 0, 0, 0.01);
            }

            p {
              color: #434242;
              font-weight: 600;
            }
            svg {
              margin: 0;
              color: rgba(36, 133, 64);
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
interface IDiscountBarProps {
  width: number;
}

export const DiscountBar = styled.div<IDiscountBarProps>`
  height: 4px;
  width: 100%;
  background-color: rgba(var(--brand-green));

  .discount-variable {
    margin-top: 10px;

    width: ${({ width }) => `${width}%`};
    height: 4px;

    background-color: rgba(var(--brand-light-green));
  }
`;
