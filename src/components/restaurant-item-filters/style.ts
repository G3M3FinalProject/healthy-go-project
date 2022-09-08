import styled from "styled-components";

export const ContainerFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 3%;

  button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const ButtonFilter = styled.button`
  width: 38px;
  height: 36px;
  background: #f7f6f3;

  img {
    width: 38px;
    height: 36px;
  }
`;
