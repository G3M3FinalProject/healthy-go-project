import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 26.192rem;

  gap: 0.7rem;
  padding: 1rem;

  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  border-radius: 10px;

  @media screen and (max-width: 426px) {
    height: 34rem;
    align-items: center;
  }

  h2 {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: ${(props) => props.theme.colors.contrastTextBlack};

    @media screen and (max-width: 770px) {
      font-size: 20px;
    }
  }
`;

export const SelectPayment = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  margin-top: 0.3rem;

  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    font-size: 16px;
  }

  label {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;

    color: ${(props) => props.theme.colors.contrastTextBlack};

    input {
      color: rgba(var(--placeholder), 1);

      margin-right: 0.3rem;
    }
  }
`;

export const DivCredCard = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;

export const DivPayment = styled.div`
  display: flex;
  flex-direction: column;

  width: 180%;

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  label {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    span {
      color: ${(props) => props.theme.colors.contrastTextBlack};
    }

    select {
      width: 100%;
      height: 2rem;

      filter: drop-shadow(4px 4px 4px rgba(var(--text-black), 0.26));

      border-radius: 10px;
      border: 1px solid rgba(var(--placeholder), 1);

      background-color: rgba(var(--light-background-color), 1);
      color: var(--text-black);

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
      }
    }
  }
`;

export const DivDateCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 48%;

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  input {
    width: 7.5rem;
  }
`;
