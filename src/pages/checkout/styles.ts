import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  gap: 1rem;
  width: 80vw;

  margin-top: 7rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 770px) {
    width: 80%;
    flex-direction: column;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const ContainerMidle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;

  width: 100%;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
