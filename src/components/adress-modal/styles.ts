import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  z-index: 9999;

  background-color: rgba(var(--text-black), 0.32);
`;

export const Container = styled.div`
  width: 31rem;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1rem 2rem;

  background-color: rgba(var(--light-background-color), 1);

  border-radius: 10px;

  @media screen and (max-width: 430px) {
    padding: 1rem 0;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;

  justify-content: center;

  padding: 0 0 1rem 0;

  p {
    font-weight: 600;
    font-size: 17px;
  }

  svg {
    position: absolute;
    top: -8px;
    right: -140px;

    @media screen and (max-width: 400px) {
      right: -62px;
    }
  }
`;
export const StateCity = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  div:nth-child(1) {
    width: 50%;
  }
`;

export const Neighbourhood = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  div:nth-child(2) {
    width: 50%;
  }
`;

export const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 1rem;

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Petrona", serif;

  gap: 1rem;
  margin: 1rem;
  padding: 1rem 0;

  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;

  svg {
    color: ${(props) => props.theme.colors.lightGreen};
  }

  button {
    background: transparent;
  }

  &:hover {
    background: ${(props) => props.theme.colors.lightGreen};
  }
`;
