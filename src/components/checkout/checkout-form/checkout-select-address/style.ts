import styled from "styled-components";

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  padding: 0.5rem;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};
`;

export const OverflowContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 15rem;

  gap: 0.5rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: green;
    border-radius: 10px;
    height: 15px;
  }
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
    color: ${(props) => props.theme.colors.contrastTextBlack};

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
    line-height: 27px;
    font-weight: 700;
    font-size: 16px;

    cursor: pointer;

    background-color: transparent;

    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
`;

export const DivAdress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 0.5rem;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};
`;

export const DivPicture = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  color: ${(props) => props.theme.colors.contrastTextBlack};

  width: 10rem;

  h4 {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme.colors.contrastTextBlack};

    @media screen and (max-width: 770px) {
      font-size: 16px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

export const AdressSelector = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  p {
    max-width: 40rem;
  }

  input {
    margin: 0 2rem;
  }

  span {
    font-family: "Petrona";
    font-style: normal;
    line-height: 20px;
    font-weight: 500;
    font-size: 20px;
    color: ${(props) => props.theme.colors.contrastTextBlack};

    @media screen and (max-width: 770px) {
      font-size: 16px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1023px) {
      p {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1023px) {
    flex-direction: row;
    justify-content: space-between;

    gap: 1em;
  }
`;
