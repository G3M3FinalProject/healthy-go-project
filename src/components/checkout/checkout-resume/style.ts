import styled from "styled-components";

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 47.5rem;

  padding: 1rem;

  border: 1px solid #c2c2c2;
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
    text-align: center;

    color: ${(props) => props.theme.colors.contrastTextBlack};

    @media screen and (max-width: 770px) {
      font-size: 16px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }

  h4 {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1%;

    border-radius: 10px;
    border: 1px solid #c2c2c2;

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
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      text-transform: capitalize;

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

export const TableHeader = styled.div`
  p:nth-child(1) {
    width: 10px;
  }
  p:nth-child(2) {
    flex: 4;
  }
  p:nth-child(3) {
    flex: 1;
  }
  p:nth-child(3) {
    justify-self: flex-end;
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
  font-family: "Petrona";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;

  color: ${(props) => props.theme.colors.contrastTextBlack};
`;

export const SummaryRestaurant = styled.div`
  img {
    width: 50px;
  }
`;
