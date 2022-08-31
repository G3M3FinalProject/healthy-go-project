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

  height: 100%;

  gap: 3rem;

  text-align: center;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 140%;
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
  width: 32.125rem;
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
export const Paragragh = styled.p`
  width: 80%;
  margin-top: -35px;
`;

export const EffectDiv = styled.div`
  text-align: center;

  & > p {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: black;
  }

  & > p::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  & > p:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Back = styled.p`
  font-size: 1.2rem;

  text-align: center;

  margin-top: 15px;

  cursor: pointer;
`;
