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

  gap: 1rem;
  z-index: ${({ isModalMenuOpen }) => (isModalMenuOpen ? -1 : 0)};
  border-radius: 25px;
  border: none;

  background-color: rgba(228, 249, 234, 1);

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

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

      background-color: rgba(228, 249, 234, 1);
    }

    button {
      background-color: rgba(228, 249, 234, 1);

      svg {
        /* width: 28px; */
        /* font: 20px; */
        margin-right: 5px;
        color: var(--placeholder);
        width: 1.4rem;
        height: 1.4rem;
        background-color: rgba(228, 249, 234, 1);
      }
    }
  }
`;
