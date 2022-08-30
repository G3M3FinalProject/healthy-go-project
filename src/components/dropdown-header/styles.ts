import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0;
  top: 5.2rem;

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

  @media screen and (min-width: 319px) {
    right: 44.69px;
  }

  @media screen and (min-width: 374px) {
    right: 49.59px;
  }

  @media screen and (min-width: 425px) {
    right: 54px;
  }
`;
