import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(var(--text-black), 0.32);
`;

export const ModalMain = styled.div`
  padding: 20px;
`;
