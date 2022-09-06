import styled from "styled-components";

export const DivForm = styled.div`
  width: 100%;

  height: 26.192rem;

  padding: 1rem;

  border: 1px solid #434242;
  border-radius: 10px;

  @media screen and (max-width: 770px) {
    height: 102%;
  }

  @media screen and (max-width: 425px) {
    height: 102%;
  }

  h2 {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: #282626;

    @media screen and (max-width: 770px) {
      font-size: 20px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    margin-top: 0.3rem;

    label {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      color: #434242;

      @media screen and (max-width: 425px) {
        font-size: 16px;
      }

      input {
        color: #434242;
        margin-right: 0.3rem;
      }
    }
  }
`;

export const DivCredCard = styled.div`
  display: flex;

  width: 100%;
`;

export const DivPayment = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;

  label {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #434242;

    select {
      width: 100%;
      height: 2rem;

      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

      border-radius: 10px;
      border: 1px solid rgba(67, 66, 66, 1);

      background-color: #f7f6f3;
      color: black;

      padding: 0.7rem 0 0 0.813rem;

      font-size: 14px;

      @media screen and (max-width: 770px) {
        width: 89%;
        padding: 0;

        font-size: 14px;
      }

      @media screen and (max-width: 425px) {
        width: 89%;
        padding: 0;
        font-size: 8px;
      }
    }
  }
`;

export const DivDateCard = styled.div`
  display: flex;

  flex-direction: column;
  width: 50%;

  input {
    align-self: start;
    width: 30%;

    margin-left: 0.5rem;
  }
`;
