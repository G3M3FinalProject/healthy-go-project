import styled from "styled-components";

export const PositioningDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  button {
    width: 6rem;
    height: 2rem;

    border-radius: 20px;

    font-size: 15px;
    font-weight: 500;
    font-family: "Petrona", serif;

    background: var(--brand-light-green);

    cursor: pointer;

    &:hover {
      color: white;
      background: var(--button-green);
    }
  }
`;
