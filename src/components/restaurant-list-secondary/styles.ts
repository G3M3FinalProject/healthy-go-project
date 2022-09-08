import styled from "styled-components";

export const SecondaryList = styled.ul`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 18px;
  gap: 18px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    grid-area: secList;
    justify-content: space-between;
    padding-left: 20px;
  }
`;

export const SecondaryItem = styled.li`
  width: 100%;
  @media (min-width: 768px) {
    width: 46%;
  }
  @media (min-width: 1024px) {
    width: 445px;
  }
  @media (min-width: 1152px) {
    width: 500px;
  }
  @media (min-width: 1280px) {
    width: 560px;
  }
  @media (min-width: 1440px) {
    width: 625px;
  }
`;
