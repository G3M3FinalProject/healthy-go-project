import styled from "styled-components";

export const SecondaryList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 18px;
  margin: 0 20px;
  padding-bottom: 18px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    grid-area: secList;
    padding-left: 20px;
    justify-content: space-between;
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
