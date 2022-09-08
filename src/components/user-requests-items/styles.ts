import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  gap: 4rem;
  margin: 7rem 0 0 0;
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

  gap: 3rem;
  padding: 1rem;

  border-radius: 15px;

  background: rgba(var(--light-background-color), 1);
  box-shadow: 0px 4px 4px rgba(var(--text-black), 0.25);

  div {
    display: flex;

    gap: 0.5rem 3rem;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;

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
    color: rgba(var(--gray), 1);
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
