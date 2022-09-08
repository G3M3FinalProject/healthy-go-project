import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    cursor: pointer;

    border-radius: 25px;
    text-decoration: none;
    border: 1px solid rgba(var(--light-border), 1);

    height: 80px;
    width: 100%;

    display: grid;
    grid-template-columns: 100px auto 40px;
    grid-template-areas: "figure mainText heart";

    max-width: 690px;

    & > figure {
      width: 90px;
      height: 80px;

      img {
        width: 90px;
        height: 78px;
        border-radius: 25px 0px 0px 25px;
      }

      grid-area: figure;
    }

    &:hover {
      box-shadow: 0px 4px 4px rgba(var(--text-black), 0.32);
    }

    @media (min-width: 1024px) {
      height: 120px;

      & > figure {
        width: 100px;
        height: 120px;

        img {
          width: 100px;
          height: 118px;
        }
      }
    }
  }
`;

export const ContainerMainText = styled.div`
  display: flex;
  flex-direction: column;

  grid-area: mainText;

  gap: 10px;
  padding: 10px 0;
  margin-left: 10px;

  .restaurant__title-rate {
    display: flex;
    align-items: center;
    gap: 4px;

    & > h3 {
      display: flex;
      align-items: center;
      justify-content: center;

      grid-area: title;

      font-weight: 700;
      font-size: 0.8rem;
      text-transform: capitalize;

      color: ${(props) => props.theme.colors.contrastTextBlack};
    }

    & > h3 {
      font-size: 0.9rem;
    }

    .restaurant__rate {
      display: flex;
      align-items: center;

      gap: 5px;

      height: 20px;

      & > svg {
        fill: ${(props) => props.theme.colors.buttonGreen};
        width: 10px;
      }

      span {
        font-size: 0.9rem;
        color: ${(props) => props.theme.colors.buttonGreen};
      }
    }
  }

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    grid-area: description;

    font-weight: 400;
    font-size: 0.7rem;
    font-style: normal;
    white-space: normal;
    line-height: 0.75rem;
    word-wrap: break-word;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.colors.contrastTextBlack};

    max-height: 1.5rem;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    & > p {
      font-size: 0.9rem;
      line-height: 0.9rem;
      max-height: 1.8rem;
    }
    .restaurant__title-rate {
      & > h3 {
        font-size: 1.3rem;
      }
    }
  }
`;

export const CategoriesStyled = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    gap: 10px;

    & > span {
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: capitalize;

      color: ${(props) => props.theme.colors.contrastTextBlack};

      background: transparent;

      padding: 2px;

      border-radius: 16px;
    }
  }
`;

export const IconItem = styled.div`
  grid-area: heart;

  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;

    fill: rgba(var(--gray), 1);
  }
`;
