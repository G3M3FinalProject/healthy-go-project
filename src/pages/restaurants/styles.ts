import styled from "styled-components";

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50vw;

  margin: 8rem 0 0 5%;
`;

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90vw;

  margin: 1% auto 0 auto;

  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-radius: 16px 16px 0 0;

  border-color: var(--brand-light-green);

  div {
    margin-left: 1%;
    margin-left: 2rem;

    h3 {
      font-family: "Courgette";
      font-weight: 400;
      font-size: 54px;
    }

    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
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
