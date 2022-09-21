import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;
  z-index: -1;

  img {
    position: absolute;
    right: 0px;
    top: 10.1rem;

    @media screen and (min-width: 200px) and (max-width: 319px) {
      display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 440px) {
      width: 23rem;
      position: absolute;
      top: 38rem;
    }

    @media screen and (min-width: 441px) and (max-width: 959px) {
      width: 25rem;
      position: absolute;
      top: 28rem;
    }

    @media screen and (min-width: 960px) and (max-width: 1024px) {
      width: 61%;
      top: 16rem;
    }

    @media screen and (min-width: 1025px) and (max-width: 1300px) {
      width: 60%;

      top: 17rem;
    }
  }

  & > p {
    bottom: -20rem;
    left: 1rem;
    position: absolute;
    font-weight: 600;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  @media screen and (min-width: 425px) {
    & > p {
    }
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 5rem;

  padding: 0 0 0 1rem;
  gap: 2em;

  color: ${(props) => props.theme.colors.contrastTextBlack};

  h1 {
    align-self: center;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 34px;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 426px) {
    top: 5rem;
    width: unset;
    height: unset;
    gap: unset;
    p {
      font-weight: 400;
      font-size: 24px;
      line-height: 34px;
    }
  }
  @media screen and (min-width: 950px) {
    top: 12rem;
    gap: 3em;

    height: 100%;
    width: 45%;
  }
`;
