import styled from "styled-components";

interface IFilterButtonProps {
  isActive?: boolean;
}

export const PositioningDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1023px) {
    margin: 8rem 0 1rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const FilterButton = styled.button<IFilterButtonProps>`
  width: 6rem;
  height: 2rem;

  border-radius: 20px;

  font-size: 15px;
  font-weight: 500;
  font-family: "Petrona", serif;
  background-color: ${(props) => props.theme.colors.lightGreen};
  //props.theme.colors.lightGreen
  //props.theme.colors.lightGreen
  /* background: ${(props) =>
    props.isActive
      ? "rgba(var(--button-green), 1)"
      : "rgba(var(--brand-light-green-2), 1)"};
       */
  background: ${(props) =>
    props.isActive
      ? props.theme.colors.buttonGreen
      : props.theme.colors.lightGreen};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  color: ${({ isActive, theme }) => {
    if (theme.title === "dark") return "white";
    return isActive ? "white" : "black" || "white";
  }};

  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.lightBorder};
  transition: all 250ms;

  &:hover {
    color: white;
    background: ${(props) => props.theme.colors.buttonGreen};
  }

  @media screen and (max-width: 425px) {
    width: 4.5rem;
    height: 1.5rem;
    font-size: 10px;
    font-weight: 600;
  }
`;
