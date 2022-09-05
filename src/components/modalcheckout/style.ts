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

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 30%;
    height: 15rem;

    margin: auto;

    background: #ffffff;
    border-radius: 10px;

    span {
      width: 100%;

      padding: 1rem;

      margin-left: 90%;

      button {
        background-color: transparent;
        font-family: "Petrona";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #434242;
      }
    }

    h2 {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #434242;

      margin-bottom: 10%;
    }
    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #434242;
    }
  }
`;
