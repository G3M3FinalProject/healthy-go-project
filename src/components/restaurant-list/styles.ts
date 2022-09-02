import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px;
`;

export const MainList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SecondaryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
