import styled from "styled-components";

export const ContainerRestaurants = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 40vw;

  @media screen and (max-width: 765px) {
    width: 100%;
    margin-right: 3%;
    font-size: 8px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    margin-right: 3%;
    font-size: 8px;
    img {
      display: none;
    }
  }
`;

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;

  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-radius: 16px 16px 0 0;
  border-color: var(--brand-light-green);

  div {
    margin-left: 1%;
    margin-left: 2rem;
    h3 {
      font-family: "Courgette";
      font-weight: 400;
      font-size: 48px;

      @media screen and (max-width: 765px) {
        font-size: 36px;
      }

      @media screen and (max-width: 425px) {
        font-size: 36px;
      }
    }
    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
    }
  }
  figure {
    width: 9rem;
    height: 7.79rem;
    border-radius: 0 16px 0 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0 16px 0 0;
    }
  }
`;
