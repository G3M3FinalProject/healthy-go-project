import styled from "styled-components";

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 47.5rem;

  padding: 1rem;

  border: 1px solid #434242;
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
    color: #434242;

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
    border: 1px solid #c2c2c2;

    p {
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

      color: #6e6e6e;

      @media screen and (max-width: 770px) {
        font-size: 16px;
      }

      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }
  }

  button {
    width: 100%;
    height: 2rem;

    padding: 1%;
    margin-bottom: 0%;

    background: #12753a;
    border-radius: 6px;

    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;

    cursor: pointer;

    @media screen and (max-width: 770px) {
      font-size: 16px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
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

  color: #434242;
`;

export const SummaryRestaurant = styled.div`
  img {
    width: 50px;
  }
`;
