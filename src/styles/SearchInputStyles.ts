import styled from "styled-components";

interface ISearchProps {
  isMenuOpen?: boolean;
}

export const SearchInputStyle = styled.div<ISearchProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: space-between;

  width: 71.438%;
  height: 2.375rem;
  border: 2px solid transparent;

  &:focus-within {
    border: 2px solid rgba(var(--brand-green));
  }
  gap: 1rem;
  z-index: ${({ isModalMenuOpen }) => (isModalMenuOpen ? -1 : 0)};
  border-radius: 25px;
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.lightBorder};

  background-color: ${(props) => props.theme.colors.lightGreen};

  filter: drop-shadow(4px 4px 4px ${(props) => props.theme.colors.lightGreen});

  color: rgba(110, 110, 110, 1);

  padding: 0.7rem 0.7rem;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    input {
      width: 100%;
      padding-left: 8px;
      font-size: 15px;
      font-weight: 500;

      background-color: ${(props) => props.theme.colors.lightGreen};
    }

    button {
      background-color: ${(props) => props.theme.colors.lightGreen};

      svg {
        /* width: 28px; */
        /* font: 20px; */
        fill: ${(props) => props.theme.colors.searchButton};
        margin-right: 5px;
        color: ${(props) => props.theme.colors.placeholder};
        width: 1.4rem;
        height: 1.4rem;
        background-color: ${(props) => props.theme.colors.lightGreen};
      }
    }
  }
`;
