import styled from "styled-components";

export const ContainerEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: absolute;
  background: #212529 rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  div {
    width: 30%;

    margin-left: auto;
    margin-right: auto;

    padding: 2rem;

    background: #ffffff;
    border-radius: 10px;

    span {
      width: 100%;

      padding: 1rem;

      margin-left: 90%;

      button {
        background-color: transparent;
        font-size: 18px;
      }
    }

    h2 {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 34px;

      margin-bottom: 2rem;
      /* identical to box height */

      color: #000000;
    }
    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;

      color: #000000;
    }
  }
`;
