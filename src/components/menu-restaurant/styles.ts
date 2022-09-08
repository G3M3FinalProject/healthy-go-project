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

  padding: 1%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  border-radius: 15px;
  border-top: none;

  h2 {
    font-size: 35px;
    color: ${(props) => props.theme.colors.contrastTextBlack};
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
      align-items: center;
      align-content: center;
      flex-direction: column;
      justify-content: space-evenly;

      width: 23rem;
      height: 14rem;

      gap: 3%;
      padding: 0.5%;

      border-radius: 25px;
      box-shadow: 1px 1px ${(props) => props.theme.colors.lightGreen};

      .add-carrinho {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;

          width: 80%;
          height: 2rem;

          color: ${(props) => props.theme.colors.primary};
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

        border-radius: 15px;

        color: var(--white);
        background: rgba(var(--brand-green), 1);

        img {
          width: 30px;
        }

        @media screen and (max-width: 425px) {
          width: 30%;
          font-size: 8px;
          margin-right: 3%;
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

  gap: 10px;
  margin-top: 3%;

  h4 {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    margin-left: 0%;

    color: ${(props) => props.theme.colors.contrastTextBlack};

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
  .preco {
    font-size: 18px;
    font-weight: 900;

    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
`;

export const ContainerP = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  margin-bottom: 1%;

  color: ${(props) => props.theme.colors.contrastTextBlack};

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

  color: ${(props) => props.theme.colors.contrastTextBlack};

  margin-top: 2rem;

  @media screen and (max-width: 425px) {
    margin-top: 1%;
    font-size: 10px;
  }
`;
