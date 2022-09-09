import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 4rem;
  margin: 7rem 0 0 0;

  h2 {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
`;

export const TextEmptyRequest = styled.h3`
  color: ${(props) => props.theme.colors.contrastTextBlack};
  font-size: 1rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;

  padding: 1rem;
  gap: 3rem;

  border-radius: 15px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    display: flex;

    gap: 0.5rem 3rem;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    gap: 0rem;

    height: 14rem;
    width: 20rem;

    .totalGrid {
      grid-column: span 2;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 2.5rem;

  .short {
    width: 3.5ch;
    overflow: hidden;
  }

  p {
    color: rgba(110, 110, 110, 1);
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 1rem;
    height: 3rem;

    .totalFlex {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;
