import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.32);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 35%;
  height: 100%;

  background-color: white;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.7);

  .header-cart {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    align-items: center;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.7);

    button svg {
      color: green;
      font-size: 20px;
    }
  }
  .desconto {
    display: flex;
    padding: 2rem;
  }
`;
