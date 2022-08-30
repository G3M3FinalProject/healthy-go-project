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
    color: rgba(67, 66, 66, 0.9);
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
