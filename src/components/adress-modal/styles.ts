import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.32);
`;

export const Container = styled.div`
  width: 31rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;

  background-color: #f7f6f3;

  border-radius: 10px;

  @media screen and (max-width: 430px) {
    padding: 1rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;

  justify-content: center;

  padding: 0 0 1rem 0;

  p {
    font-weight: 600;
    font-size: 17px;
  }

  svg {
    position: absolute;
    top: -8px;
    right: -140px;

    @media screen and (max-width: 400px) {
      right: -62px;
    }
  }
`;

export const EstadoCidade = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  div:nth-child(1) {
    width: 50%;
  }
`;

export const BairroNumero = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  div:nth-child(2) {
    width: 50%;
  }
`;
