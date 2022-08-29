import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0;
  top: 5rem;

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
  }
`;

export const Arrow = styled.div`
  border: solid #fafafa;
  position: absolute;
  top: -4px;
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
`;
