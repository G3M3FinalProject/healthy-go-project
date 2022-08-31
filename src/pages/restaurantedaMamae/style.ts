import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 8%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  border-radius: 16px 16px 0 0;
  border-color: var(--brand-light-green);

  div {
    margin-left: 1%;
    h3 {
      font-family: "Courgette";
      font-weight: 400;
      font-size: 38px;
    }
    p {
      font-family: "Petrona";
      font-size: 12px;
    }
  }
  figure {
    width: 9rem;
    height: 7.79rem;
    border-radius: 0 16px 0 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0 16px 0 0;
    }
  }
`;
