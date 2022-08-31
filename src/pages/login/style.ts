import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  padding: 2%;
  margin-top: 5%;

  img {
    margin-top: 5%;
    width: 25vw;
    height: 50vh;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    margin-top: 0%;
    position: absolute;
    margin-left: 5%;
  }
  
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;

  @media (max-width: 440px) {
    width: 20rem;
    margin-top: -55%;
    input {
      width: 20%;
    }
    
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-size: 32px;
    margin-bottom: 5%;
  }

  input {
    width: 20rem;
    height: 3rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    margin-bottom: 4%;
    padding: 3%;
    color: #000000;
    background: rgba(146, 227, 169, 0.29);
    border-radius: 25px;
  }

  button {
    width: 10rem;
    height: 2rem;
    margin-bottom: 2%;
    background: #58a446;
    border-radius: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #ffffff;
    cursor: pointer;
  }
`;
export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    text-decoration-line: underline;
    text-transform: capitalize;
    color: #1a3d96;
    margin-top: 2%;
  }

  button {
    width: 17vw;
    height: 6vh;
    margin-top: 5%;
    margin-bottom: 2%;
    border: none;
    cursor: pointer;
    padding: 0%;

    img {
      width: 19vw;
      height: 8vh;
      border: 1.2182px solid #868e96;
      border-radius: 4px;
      margin-bottom: 2%;
      margin-top: 0%;
    }

  }
  
`;
