import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  position: relative;

  margin: 0 0.4rem;

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  color: ${(props) => props.theme.colors.contrastTextBlack};

  svg {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  &::after {
    content: "";
    position: absolute;
    transform: scaleX(0);
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.contrastTextBlack};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  transition: all 0.5ms;
`;
