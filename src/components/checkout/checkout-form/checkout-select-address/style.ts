import styled from "styled-components";

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 9.316rem;

  padding: 1rem;

  border: 1px solid #434242;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    width: 96%;

    margin-left: auto;
    margin-right: auto;

    h2 {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #434242;

      @media screen and (max-width: 770px) {
        font-size: 16px;
      }

      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }

    button {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 27px;

      cursor: pointer;

      background-color: transparent;

      color: #12753a;
    }
  }
`;

export const DivAdress = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  border-radius: 10px;
  border: 1px solid #c2c2c2;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;

    padding: 1%;

    p {
      width: 200%;

      span {
        font-family: "Petrona";
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 25px;
        color: #6e6e6e;

        @media screen and (max-width: 770px) {
          font-size: 16px;
        }

        @media screen and (max-width: 425px) {
          font-size: 16px;
        }
      }

    }
  }
`;

export const DivPicture = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-start;

  width: 1rem;

  h4 {
    margin: 0%;

    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #434242;


    @media screen and (max-width: 770px) {
      font-size: 16px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }

  }

  img {
    width: 2rem;
    height: 2rem;
    margin: 0%;

  }
`;
