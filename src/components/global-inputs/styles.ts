import styled from "styled-components";

interface IInputLg {
  error: boolean;
}

export const InputLg = styled.div<IInputLg>`
  position: relative;

  width: 100%;
  height: 70px;

  input {
    width: 100%;
    height: 40px;

    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

    border-radius: 10px;
    border: 1px solid;
    border-color: ${({ error }) =>
      error ? "rgba(255, 0, 0, 1)" : "rgba(67, 66, 66, 1)"};

    background-color: #f7f6f3;
    color: black;

    padding: 0.7rem 0 0 0.813rem;

    font-size: 17px;

    outline: none;

    &::placeholder {
      color: var(--placeholder);
    }

    &:focus {
      background-color: #f7f6f3;
      border-color: #248b24;
      box-shadow: 1px 1px 0px 0px #248b24;
    }

    &:focus ~ label {
      top: -0.5rem;
      font-size: 17px;
      left: 0.8rem;
      color: #248b24;
    }

    &:not(:placeholder-shown) ~ label {
      top: -0.65rem;
      font-size: 17px;
      left: 0.8rem;
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 0.4rem;

    border-radius: 6px;

    padding: 0 0.5em;

    color: var(--placeholder);
    background-color: #f7f6f3;

    pointer-events: none;
    color: ${({ error }) =>
      error ? "rgba(255, 0, 0, 1)" : "var(--placeholder)"};

    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;

    font-style: normal;
    font-weight: 300;
    font-size: 17px;

    line-height: 25px;
  }
  & > div {
    display: flex;
    align-items: center;
    color: rgba(255, 0, 0, 1);
    padding-left: 0.4rem;
    padding-top: 0.1rem;
    p {
      color: rgba(255, 0, 0, 1);
      font-size: 0.6rem;
      padding-left: 0.2rem;
    }
  }
  @media (min-width: 768px) {
    div {
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const ButtonLg = styled.button`
  width: 100%;

  border: none;
  outline: none;

  margin: 10px;
  padding: 14px 24px;
  border-radius: 15px;

  background: linear-gradient(to right, #12753a, #8ac926);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  position: relative;

  cursor: pointer;

  overflow: hidden;

  .ripple {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: white;

    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ripple-effect 1s ease 1 forwards;
  }

  .content {
    position: relative;
    z-index: 2;

    pointer-events: none;
  }

  @keyframes ripple-effect {
    0% {
      width: 0px;
      height: 0px;

      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;

      opacity: 0;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 28.438rem;
  height: 3.375rem;

  gap: 1rem;

  border-radius: 25px;
  border: none;

  background-color: rgba(228, 249, 234, 1);

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  color: rgba(110, 110, 110, 1);

  padding: 0.7rem 2rem;

  input {
    font-size: 15px;
    font-weight: 500;
    background-color: rgba(228, 249, 234, 1);
  }
`;

export const ButtonMd = styled.button`
  width: 80%;
  height: fit-content;

  border-radius: 15px;

  font-weight: 700;

  color: white;
  background-color: var(--button-green);

  padding: 1rem 4.5%;
`;
