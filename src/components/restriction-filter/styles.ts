import styled from "styled-components";


export const Container = styled.div`
  display: flex;

  gap: 0.5rem;

  p {
    background: var(--brand-light-green);

    border-radius: 10px;

    cursor: pointer;

    padding: 0.2rem 0.3rem;

    &:hover {
      background: var(--button-green);
      color: white;
    }
  }
`;
