import styled from "styled-components";

export const Input = styled.input`
  width: fit-content;
  height: fit-content;

  border-radius: 10px;

  border: 0.8px solid #434242;
  background-color: #f7f6f3;

  padding: 0.7rem;
  font-size: 17px;

  &::placeholder {
    color: var(--placeholder);
  }
`;

export const Button = styled.button`
  width: fit-content;
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

  background-color: var(--brand-light-green);

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  color: white;

  padding: 0.7rem;

  input {
    font-size: 15px;
    font-weight: 600;
    background-color: var(--brand-light-green);
  }
`;
