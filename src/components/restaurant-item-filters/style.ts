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
  position: relative;

  img {
    width: 38px;

    height: 36px;
  }

  &::before {
    content: attr(data-hover);

    visibility: hidden;
    opacity: 0;
    font-family: Petrona;
    font-size: 12px;
    background-color: #177623;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 4px 10px 4px 10px;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 40px;
  }
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;
