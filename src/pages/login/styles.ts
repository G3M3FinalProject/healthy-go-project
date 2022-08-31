import styled from "styled-components";

export const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  margin: 7rem 0 0 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 30%;
  height: 100%;

  gap: 3rem;

  text-align: center;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 1rem;

  p:nth-child(4) {
    cursor: pointer;
    font-size: 18px;
  }

  p + p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
  }
`;

export const Input = styled.input`
  width: 26.125rem;
  height: 2.5rem;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  border-radius: 10px;
  border: 1px solid rgba(67, 66, 66, 1);

  background-color: #f7f6f3;
  color: black;

  padding: 0.7rem 0.813rem;

  font-size: 17px;

  outline: none;

  &::placeholder {
    color: var(--placeholder);
  }

  @media screen and (max-width: 426px) {
    width: 19rem;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    width: 20rem;
  }
`;

export const Button = styled.button`
  width: 26.125rem;
  height: fit-content;

  border-radius: 15px;

  font-weight: 700;

  color: white;
  background-color: var(--button-green);

  padding: 1rem 4.5%;

  @media screen and (max-width: 426px) {
    width: 19rem;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    width: 20rem;
  }
`;

export const Img = styled.img`
  display: block;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 426px) {
    display: none;
  }

  @media screen and (min-width: 776px) and (max-width: 920px) {
    width: 55%;
  }

  @media screen and (min-width: 921px) {
    width: unset;
  }
`;

export const ShowPassword = styled.div`
  width: 100%;
  position: relative;

  button {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
  }
`;
