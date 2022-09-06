import styled from "styled-components";

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  padding: 0.5rem;

  border: 1px solid #434242;
  border-radius: 10px;
`;

export const OverflowContainer = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  width: 100%;
  height: 15rem;

  gap: 0.5rem;
`;

export const SelectAddressInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

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
`;

export const DivAdress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 0.5rem;

  border-radius: 10px;
  border: 1px solid #c2c2c2;
`;

export const DivPicture = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 10rem;

  h4 {
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

  @media screen and (max-width: 425px) {
    img {
      display: none;
    }
  }
`;

export const AdressSelector = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  img {
    width: 2rem;
    height: 2rem;
    margin: 0%;
  }

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
`;
