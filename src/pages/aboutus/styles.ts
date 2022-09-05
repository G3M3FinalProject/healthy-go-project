import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  img {
    position: absolute;
    right: 0px;
    top: 10.1rem;

    @media screen and (min-width: 200px) and (max-width: 319px) {
      display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 425px) {
      width: 23rem;
      position: absolute;
      top: 34rem;
    }

    @media screen and (min-width: 426px) and (max-width: 959px) {
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
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 12rem;

  height: 100%;
  width: 45%;

  padding: 0 0 0 1rem;
  gap: 3em;

  color: rgba(18, 117, 58, 1);

  h1 {
    align-self: center;
    color: black;
  }

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
  }

  @media screen and (min-width: 426px) and (max-width: 959px) {
    top: 5rem;
    width: unset;
    height: unset;
    gap: unset;
  }
`;
