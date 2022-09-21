import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    cursor: pointer;
    border: 1px solid rgb(198 198 198);
    border-radius: 25px;
    text-decoration: none;
    height: 80px;
    width: 100%;
    display: grid;
    grid-template-areas: "figure mainText heart";
    grid-template-columns: 100px auto 40px;
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
  grid-area: mainText;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 10px;
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
      color: var(--text-black);
    }
    & > h3 {
      font-size: 0.9rem;
    }
    .restaurant__rate {
      display: flex;
      gap: 5px;
      height: 20px;
      align-items: center;
      & > svg {
        fill: var(--button-green);
        width: 10px;
      }
      span {
        font-size: 0.9rem;
        color: var(--button-green);
      }
    }
  }

  & > p {
    grid-area: description;
    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    color: var(--text-black);
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 0.75rem;
    max-height: 1.5rem;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    & > p {
      font-size: 0.8rem;
      line-height: 0.85rem;
      max-height: 1.7rem;
    }
    .restaurant__title-rate {
      & > h3 {
        font-size: 0.9rem;
      }
    }
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
      background-color: ${(props) => props.theme.colors.categories};
      color: ${(props) => props.theme.colors.contrastTextBlack};
      padding: 3px 3.5px;
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
    fill: #6e6e6e;
  }
`;
