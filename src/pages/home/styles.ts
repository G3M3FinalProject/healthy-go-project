import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  & > figure {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas: "mainList figure" "secList secList";
    grid-template-columns: 500px auto;

    ul:nth-child(1) {
      grid-area: mainList;
    }
    ul:nth-child(2) {
      grid-area: secList;
    }

    & > figure {
      grid-area: figure;
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`;
