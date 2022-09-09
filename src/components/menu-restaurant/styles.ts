import styled from "styled-components";

interface IContainerProductProps {
  isMessageButtonAdd: string;
}

export const ContainerMenu = styled.div`
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 98%;
`;

export const ContainerDivMenu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  @media screen and (min-width: 768px) {
    margin: 0 2rem 0 2rem;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 1024px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1440px) {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
`;

export const ContainerProduct = styled.li<IContainerProductProps>`
  display: grid;
  grid-template-areas: "img title title" "img types types" "img price btn";
  border-bottom: 1px solid rgba(var(--brand-light-green), 1);
  border: 1px solid rgb(198 198 198);

  border-radius: 10px;
  height: 140px;
  width: 100%;
  align-items: center;

  h4 {
    grid-area: title;
    margin-left: 0%;
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
  .preco {
    grid-area: price;
    font-size: 18px;
    font-weight: 900;
    width: 90px;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
  img {
    grid-area: img;
    justify-self: center;
    align-self: center;
    width: 80px;
    height: 80px;
    border-radius: 25px;
    object-fit: cover;
  }
  button {
    grid-area: btn;
    align-self: center;
    background-color: rgba(var(--button-green), 1);
    background-color: ${({ isMessageButtonAdd }) =>
      isMessageButtonAdd === "Produto adicionado!"
        ? " #54a656"
        : "rgba(var(--button-green), 1)"};

    border-radius: 20px;
    font-size: 0.8rem;
    padding: 0.4rem;
    padding: 0.5rem;

    font-weight: 600;
    color: white;
    font-family: Petrona;
    margin-right: 0.3rem;
    &:hover {
      background-color: #54a656;
    }
  }
  .productAddedToCart {
    background-color: blue;
  }
  @media screen and (min-width: 420px) {
    padding: 5px;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const ContainerCategory = styled.p`
  grid-area: types;
  font-family: "Petrona";
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-self: center;
  span {
    background-color: var(--gray-100);
    margin-left: 5px;
    padding: 5px;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
    align-self: center;
  }
  margin-bottom: 1%;
  @media screen and (min-width: 370px) {
    font-size: 13px;
  }
`;
