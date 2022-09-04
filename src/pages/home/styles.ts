import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;

  & > figure {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas: "filters figureMain" "mainList figureMain" "secList secList";
    grid-template-columns: 48% 47%;
    grid-template-rows: 150px 552px auto;
    & > figure {
      grid-area: figureMain;
      display: flex;
      align-items: center;
      width: 100%;
      img {
        width: 100%;
        max-width: 640px;
      }
    }
  }
  @media (min-width: 1440px) {
    max-width: 1440px;

    margin: 100px auto;
  }
`;
