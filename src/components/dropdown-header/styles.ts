import styled from "styled-components";

export const Container = styled.div`
  width: 11rem;
  height: fit-content;
  position: absolute;
  right: 0.3rem;
  top: 8.7rem;

  z-index: 1;

  background: ${(props) => props.theme.colors.cartLightBackground};

  border-radius: 9px;
  padding: 1rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 42px) {
    right: 9rem;
    top: 8.7rem;
  }

  @media screen and (min-width: 424px) and (max-width: 624px) {
    right: 4.3rem;
    top: 6.7rem;
  }

  @media screen and (min-width: 625px) and (max-width: 1023px) {
    right: 10rem;
  }

  @media screen and (min-width: 1024px) {
    right: 13rem;
  }

  @media screen and (min-width: 1024px) {
    right: 13.2rem;
  }

  @media screen and (min-width: 1500px) {
    right: 14.2rem;
  }

  @media screen and (min-width: 1700px) {
    right: 15.2rem;
  }

  @media screen and (min-width: 1700px) {
    right: 16rem;
  }

  @media screen and (min-width: 2000px) {
    right: 20rem;
  }

  @media screen and (min-width: 2600px) {
    right: 25rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  padding: 0.6rem 0 0 0;

  svg {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  p {
    display: inline-block;
    position: relative;

    color: ${(props) => props.theme.colors.contrastTextBlack};

    margin: 0 0.4rem;
    font-weight: 500;
    cursor: pointer;
  }

  p::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.contrastTextBlack};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  p:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Arrow = styled.div`
  border: solid ${(props) => props.theme.colors.cartLightBackground};
  position: absolute;
  top: -4px;
  right: 54px;
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);

  @media screen and (max-width: 281px) {
    right: 1.8rem;
  }

  @media screen and (min-width: 281px) {
    right: 1.8rem;
  }

  @media screen and (min-width: 319px) {
    right: 2.6rem;
  }

  @media screen and (min-width: 359px) {
    right: 2.2rem;
  }

  @media screen and (min-width: 374px) {
    right: 2.3rem;
  }

  @media screen and (min-width: 389px) {
    right: 2.5rem;
  }

  @media screen and (min-width: 405px) {
    right: 2.8rem;
  }

  @media screen and (min-width: 411px) {
    right: 2.6rem;
  }

  @media screen and (min-width: 413px) {
    right: 3.1rem;
  }

  @media screen and (min-width: 426px) {
    right: 0.6rem;
  }

  @media screen and (min-width: 445px) {
    right: 1rem;
  }
`;
