import styled from "styled-components";

export const SearchInputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  justify-content: space-between;

  width: 71.438%;
  height: 2.375rem;

  gap: 1rem;
  padding: 0.7rem 0.7rem;

  border: none;
  border-radius: 25px;

  color: rgba(var(--placeholder), 1);
  background-color: rgba(var(--brand-light-green-2), 1);

  filter: drop-shadow(4px 4px 4px rgba(var(--text-black), 0.25));

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

      background-color: rgba(var(--brand-light-green-2), 1);
    }

    button {
      background-color: rgba(var(--brand-light-green-2), 1);

      svg {
        margin-right: 5px;
        color: rgba(var(--placeholder), 1);
        width: 1.4rem;
        height: 1.4rem;
        background-color: rgba(var(--brand-light-green-2), 1);
      }
    }
  }
`;
