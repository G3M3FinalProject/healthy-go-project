import styled from "styled-components";

interface IFilterButtonProps {
  isActive?: boolean;
}

export const PositioningDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

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

  background: ${({ isActive }) =>
    isActive
      ? "rgba(var(--brand-light-green), 1)"
      : "rgba(var(--brand-light-green-2), 1)"};
  color: ${({ isActive }) =>
    isActive ? "rgba(var(--white), 1)" : "rgba(var(--text-black), 1)"};

  box-shadow: 0px 4px 4px rgba(var(--text-black), 0.15);
  transition: all 250ms;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background: rgba(var(--brand-light-green), 1);
  }

  @media screen and (max-width: 425px) {
    width: 4.5rem;
    height: 1.5rem;
    font-size: 10px;
    font-weight: 600;
  }
`;
