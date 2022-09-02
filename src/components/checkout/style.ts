import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  gap: 1rem;
  width: 98vw;

  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 425px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ContainerMidle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 9.316rem;

  padding: 1rem;

  border: 1px solid #434242;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    width: 96%;

    margin-left: auto;
    margin-right: auto;

    h2 {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #434242;

      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }

    button {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 27px;

      cursor: pointer;

      background-color: transparent;

      color: #12753a;
    }
  }
`;

export const DivAdress = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  border-radius: 10px;
  border: 1px solid #c2c2c2;

  h4 {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #434242;

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

export const DivPicture = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 0.7%;

  p {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 25px;
    color: #6e6e6e;

    img {
      width: 10%;
      height: 10%;
    }
  }
`;

export const DivForm = styled.div`
  width: 100%;
  height: 20.192rem;
  padding: 1rem;

  border: 1px solid #434242;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    h2 {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #282626;
    }
    div {
      display: flex;
      align-items: center;
      gap: 3%;

      label {
        font-family: "Petrona";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #434242;
        input {
          color: #434242;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

export const DivCredCard = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;

  @media screen and (max-width: 425px) {
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
  }

  select {
    width: 100%;
    height: 2rem;

    border: 1px solid #6e6e6e;
    border-radius: 6px;
  }
`;

export const DivDateCard = styled.div`
  label {
    width: 10rem;
    input {
      width: 10%;
    }
  }
`;

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 47.5rem;

  padding: 1rem;

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  h4 {
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #434242;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1%;

    border: 1px solid #434242;
    border-radius: 10px;

    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      color: #434242;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      text-transform: capitalize;

      color: #6e6e6e;
    }
  }

  button {
    width: 100%;
    height: 2rem;

    padding: 1%;
    margin-bottom: 0%;

    background: #12753a;
    border-radius: 6px;

    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;

    cursor: pointer;
  }
`;

export const DivImgCheck = styled.div`
  width: 100%;
  border: none;

  img {
    margin-left: 20%;
    width: 80%;
    height: 4rem;
    background-color: transparent;
  }
`;

export const DivTT = styled.div`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;

  color: #434242;
`;
