import styled from "styled-components";

export const DivForm = styled.div`
  width: 100%;
  height: 22.192rem;
  padding: 1rem;

  border: 1px solid #434242;
  border-radius: 10px;

  @media screen and (max-width: 770px) {
    height: 102%;
  }

  @media screen and (max-width: 425px) {
    height: 102%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    h2 {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
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
      align-items: center;
      gap: 3%;

      label {
        font-family: "Petrona";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #434242;

        @media screen and (max-width: 425px) {
          font-size: 16px;
        }

        input {
          color: #434242;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

export const DivCredCard = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
  }

  label {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #434242;

    select {
      width: 100%;
      height: 2rem;

      left: 1rem;
      top: 0.4rem;

      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

      border-radius: 10px;
      border: 1px solid rgba(67, 66, 66, 1);

      background-color: #f7f6f3;
      color: black;

      padding: 0.7rem 0 0 0.813rem;

      font-size: 12px;

      outline: none;

      &::placeholder {
        color: var(--placeholder);
      }

      &:focus {
        background-color: #f7f6f3;
      }

      &:focus ~ label {
        top: -0.5rem;
        font-size: 19px;
        left: 0.8rem;
        color: var(--placeholder);
      }

      &:not(:placeholder-shown) ~ label {
        top: -0.65rem;
        font-size: 19px;
        left: 0.8rem;
      }

      @media screen and (max-width: 770px) {
        width: 89%;
        padding: 0;
        font-size: 8px;
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
  align-items: flex-start;
  justify-content: flex-start;

  width: 1rem;

  input {
    align-self: start;
    width: 40%;
    margin-left: 0.5rem;
  }
`;
