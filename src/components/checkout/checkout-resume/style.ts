import styled from "styled-components";

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 47.5rem;

  padding: 1rem;

  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  border-radius: 10px;

  @media screen and (max-width: 770px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  h3 {
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

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1%;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.lightBorder};

    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      color: ${(props) => props.theme.colors.contrastTextBlack};

      @media screen and (max-width: 770px) {
        font-size: 16px;
      }

      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      text-transform: capitalize;
      font-family: "Petrona";
      font-style: normal;
      line-height: 20px;
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
  }

  button {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 600;
    font-family: "Petrona";
  }
`;

export const DivImgCheck = styled.span`
  width: 100%;

  img {
    margin-left: 50%;
    width: 50%;
    height: 2rem;
    background-color: transparent;
  }
`;

export const DivTT = styled.div`
  text-transform: capitalize;
  font-family: "Petrona";
  font-style: normal;
  line-height: 23px;
  font-weight: 700;
  font-size: 20px;

  color: ${(props) => props.theme.colors.contrastTextBlack};
`;

export const SummaryRestaurant = styled.div`
  color: ${(props) => props.theme.colors.contrastTextBlack};

  img {
    width: 50px;
  }
`;
