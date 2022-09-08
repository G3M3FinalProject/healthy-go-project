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

    filter: drop-shadow(4px 4px 4px rgba(var(--text-black), 0.25));

    outline: none;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${({ error }) =>
      error ? "rgba(255, 0, 0, 1)" : "rgba(var(--placeholder), 1)"};

    color: rgba(var(--text-black), 1);
    background-color: rgba(var(--light-background-color), 1);

    padding: 0.7rem 0 0 0.813rem;

    font-size: 17px;

    &::placeholder {
      color: rgba(var(--placeholder), 1);
    }

    &:focus {
      border-color: rgba(var(--brand-green), 1);
      box-shadow: 1px 1px 0px 0px rgba(var(--brand-green), 1);
      background-color: rgba(var(--light-background-color), 1);
    }

    &:focus ~ label {
      top: -0.5rem;
      font-size: 19px;
      left: 0.8rem;
      color: rgba(var(--brand-green), 1);
    }

    &:not(:placeholder-shown) ~ label {
      left: 0.8rem;
      top: -0.65rem;
      font-size: 19px;
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 0.4rem;

    border-radius: 6px;

    padding: 0 0.5em;

    color: rgba(var(--placeholder), 1);
    background-color: rgba(var(--light-background-color), 1);

    pointer-events: none;
    color: ${({ error }) =>
      error ? "rgba(255, 0, 0, 1)" : "rgba(var(--placeholder), 1)"};

    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;

    font-size: 20px;
    font-weight: 300;
    line-height: 25px;
    font-style: normal;
  }

  & > div {
    display: flex;
    align-items: center;

    color: rgba(var(--warning-error), 1);

    padding-left: 0.4rem;
    padding-top: 0.1rem;

    p {
      color: rgba(var(--warning-error), 1);
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

  background: linear-gradient(
    to right,
    rgba(var(--button-green), 1),
    RGB(110, 173, 0)
  );
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
    background-color: rgba(var(--white), 1);

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
  align-items: center;
  justify-content: start;

  width: 28.438rem;
  height: 3.375rem;

  gap: 1rem;
  padding: 0.7rem 2rem;

  border: none;
  border-radius: 25px;

  background-color: rgba(var(--brand-light-green-2), 1);

  filter: drop-shadow(4px 4px 4px rgba(var(--text-black), 0.25));

  color: var(--gray);

  input {
    font-size: 15px;
    font-weight: 500;
    background-color: rgba(var(--brand-light-green-2), 1);
  }
`;

export const ButtonMd = styled.button`
  width: 80%;
  height: fit-content;

  border-radius: 15px;

  font-weight: 700;

  color: var(--white);
  background-color: rgba(var(--button-green), 1);

  padding: 1rem 4.5%;
`;
