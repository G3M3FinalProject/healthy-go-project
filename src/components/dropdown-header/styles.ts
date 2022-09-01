import styled from "styled-components";

export const Container = styled.div`
  width: 11rem;
  height: fit-content;
  position: absolute;
  right: 0.3rem;
  top: 8.7rem;

  background: #fafafa;

  border-radius: 9px;
  padding: 1rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  padding: 0.6rem 0 0 0;

  p {
    margin: 0 0.4rem;

    font-weight: 500;
  }

  & > p {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: black;
  }

  & > p::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  & > p:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Arrow = styled.div`
  border: solid #fafafa;
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

  @media screen and (min-width: 424px) {
    right: 0.6rem;
  }
`;
