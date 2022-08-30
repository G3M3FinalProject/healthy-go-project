import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0.78rem;
  top: 11.7rem;

  background: #fafafa;

  border-radius: 9px;
  padding: 1rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Menu = styled.div`
  display: flex;

  padding: 0.6rem 0 0 0;

  p {
    margin: 0 0.4rem;
    color: black;
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

  @media screen and (max-width: 321px) {
    right: 2rem;
  }

  @media screen and (min-width: 321px) {
    right: 2rem;
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
    right: 3rem;
  }

  @media screen and (min-width: 413px) {
    right: 3.1rem;
  }

  @media screen and (min-width: 424px) {
    right: 3.4rem;
  }
`;
