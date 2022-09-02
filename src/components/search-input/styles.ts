import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: space-between;

  width: 71.438%;
  height: 2.375rem;

  gap: 1rem;

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

      font-size: 15px;
      font-weight: 500;

      background-color: rgba(228, 249, 234, 1);
    }

    button {
      background-color: rgba(228, 249, 234, 1);

      img {
        width: 50%;

        background-color: rgba(228, 249, 234, 1);
      }
    }
  }
`;
