import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 100vw;

  @media (max-width: 440px) {
    width: 100%;
  }

  div {
    display: inline-block;
    position: relative;
    margin-top: 5%;
    padding: 2%;
    width: 50%;

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      text-transform: capitalize;
      color: #000000;
      @media (max-width: 440px) {
        font-size: 18px;
      }
    }
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 2%;
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-transform: capitalize;
    color: #000000;

    input {
      padding: 1%;
      width: 98%;
      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 40px;
      margin-top: 2%;
    }
  }

  button {
    width: 35%;
    height: 7vh;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    background: #58a446;
    border-radius: 40px;
    margin-top: 4%;
    cursor: pointer;
  }

  @media (max-width: 440px) {
    width: 80vw;
    margin-left: -35%;

    label {
      width: 100%;
      font-size: 12px;
    }

    button {
      width: 50%;
      font-size: 12px;
      height: 2rem;
    }
  }
`;
