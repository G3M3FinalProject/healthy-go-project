import styled from "styled-components";

export const ContainerEnd = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0505057a;

  z-index: 1;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1.5rem;
  gap: 1rem;

  background: #ffffff;
  border-radius: 10px;

  span {
    display: flex;
    justify-content: flex-end;

    width: 100%;
  }

  h2,
  p {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #434242;
  }

  p {
    font-size: 16px;
  }

  .checkmark-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25em;
    border: 4px solid #71dfbe;

    width: 0;
    height: 0;

    background-color: white;

    animation: circle 200ms calc(500ms + 1000ms) forwards
      cubic-bezier(0.26, 0.6, 0.46, 1.7);
  }

  .checkmark-svg {
    width: 35px;
    stroke: #71dfbe;
    stroke-dashoffset: 40.84104919433594;
    stroke-dasharray: 40.84104919433594;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
    animation: checkmark 400ms calc(300ms + 1000ms + 300ms) forwards;
  }

  @keyframes circle {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }

  @keyframes checkmark {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;
