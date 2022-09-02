import styled from "styled-components";

export const MainList = styled.ul`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    grid-area: mainList;
    padding-left: 20px;
  }
`;

export const PrimaryItem = styled.li`
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
