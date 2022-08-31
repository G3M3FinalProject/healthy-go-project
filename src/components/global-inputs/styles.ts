import styled from "styled-components";

export const InputLg = styled.div`
  position: relative;

  width: 100%;
  height: 70px;

  input {
    width: 100%;
    height: 40px;

    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

    border-radius: 10px;
    border: 1px solid rgba(67, 66, 66, 1);

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
    }

    &:focus ~ label {
      top: -0.5rem;
      font-size: 19px;
      left: 0.8rem;
      color: var(--placeholder);
    }

    &:not(:placeholder-shown) ~ label {
      top: -0.65rem;
      font-size: 19px;
      left: 0.8rem;
    }
  }

  button {
    position: absolute;
    right: 17px;
    top: 13px;
    background-color: #f7f6f3;
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

    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;

    z-index: 1;

    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
  }
`;

export const ButtonLg = styled.button`
  width: 100%;
  height: fit-content;

  border-radius: 15px;

  font-weight: 700;

  color: white;
  background-color: var(--button-green);

  padding: 1rem 4.5%;
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
