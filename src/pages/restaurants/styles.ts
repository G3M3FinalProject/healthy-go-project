import styled from "styled-components";

export const ContainerRestaurants = styled.div`
  margin: 100px 20px 0 20px;

  @media screen and (min-width: 768px) {
    margin: 100px 40px 0 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 100px auto 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
  @media screen and (min-width: 425px) {
    flex-direction: row-reverse;
  }
`;
