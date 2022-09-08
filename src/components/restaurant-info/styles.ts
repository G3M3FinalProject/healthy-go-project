import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding-bottom: 10px;
  border: 1px solid rgba(var(--brand-light-green), 1);
`;
export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  div {
    margin-left: 0.5rem;

    h3 {
      font-family: "Courgette";
      font-weight: 500;
      font-size: 48px;

      color: ${(props) => props.theme.colors.contrastTextBlack};

      @media screen and (max-width: 770px) {
        font-size: 36px;
      }

      @media screen and (max-width: 425px) {
        font-size: 36px;
      }
    }
    p {
      font-family: "Petrona";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: ${(props) => props.theme.colors.contrastTextBlack};
    }
  }

  figure {
    width: 9rem;
    height: 7.79rem;
    border-radius: 0 16px 0 0;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      border-radius: 0 16px 0 0;
    }
  }
  @media screen and (min-width: 768px) {
    div {
      margin-left: 2rem;
    }
  }
`;
