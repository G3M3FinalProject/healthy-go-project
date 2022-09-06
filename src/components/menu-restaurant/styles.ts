import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerDivMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--brand-light-green);
  border-radius: 15px;
  border-top: none;
  padding: 1%;

  h2 {
    font-size: 35px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;

    gap: 2rem;

    margin-top: 1.5rem;

    width: 100%;
    height: 100%;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      align-content: center;
      gap: 3%;

      width: 23rem;
      height: 14rem;

      padding: 0.5%;

      border-radius: 25px;
      box-shadow: 1px 1px var(--brand-light-green);

      .add-carrinho {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: center;
          width: 80%;
          color: white;
          height: 2rem;
        }
      }
      @media screen and (max-width: 1491px) {
        width: 21rem;
      }
      @media screen and (max-width: 1417px) {
        width: 21rem;
      }
      @media screen and (max-width: 1180px) {
        width: 23rem;
      }
      @media screen and (max-width: 1369px) {
        width: 20rem;
      }

      @media screen and (max-width: 425px) {
        width: 100%;
        height: 30%;
        align-items: center;
        flex-direction: row;
      }

      @media screen and (max-width: 770px) {
        width: 100%;
        height: 30%;
        align-items: center;
        flex-direction: row;
      }
      div {
        width: 100%;
        display: flex;
        align-items: flex-start;

        flex-wrap: wrap;
        gap: 3%;

        @media screen and (max-width: 425px) {
          width: 100%;
        }

        img {
          object-fit: cover;
          width: 8rem;
          height: 8rem;
          padding: 1%;
          border-radius: 25px;

          @media screen and (max-width: 425px) {
            width: 40%;
            height: 50%;
          }
          @media screen and (max-width: 1369px) {
            width: 7rem;
          }
        }
      }
      button {
        width: 50px;
        height: 3.25rem;
        padding: 1%;
        margin-right: 20px;

        background: rgba(36, 133, 64, 5);
        border-radius: 15px;

        img {
          width: 30px;
        }

        @media screen and (max-width: 425px) {
          width: 30%;
          margin-right: 3%;
          font-size: 8px;
        }
      }
    }
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;

  width: 57%;
  height: 3rem;

  margin-top: 3%;
  gap: 10px;

  h4 {
    margin-left: 0%;
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
  .preco {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const ContainerP = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;


  margin-bottom: 1%;


  @media screen and (max-width: 425px) {
    font-size: 10px;
    display: none;
  }
`;


export const ContainerPreco = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  margin-top: 2rem;

  @media screen and (max-width: 425px) {
    margin-top: 1%;
    font-size: 10px;
  }
`;

