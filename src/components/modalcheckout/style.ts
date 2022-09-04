import styled from "styled-components";

export const ContainerEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 140vh;

  position: absolute;
  background: #212529 rgba(0, 0, 0, 1.45);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  margin-left: -57%;
  margin-top: -16%;

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
