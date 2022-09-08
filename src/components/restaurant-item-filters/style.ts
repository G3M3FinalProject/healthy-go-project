import styled from "styled-components";

export const ContainerFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 10%;
  margin-left: 3%;
`;

export const ButtonFilter = styled.button`
  width: 38px;
  height: 36px;
  background: rgba(var(--light-background-color), 1);

  img {
    width: 38px;
    height: 36px;
  }
`;
