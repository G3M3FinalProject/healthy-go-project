import styled from "styled-components";

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
`;

export const ContainerProduct = styled.li`
  display: grid;
  grid-template-areas: "img title title" "img types types" "img price btn";
  border-right: 1px solid var(--brand-light-green);
  border-bottom: 1px solid var(--brand-light-green);
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
  }
  .preco {
    grid-area: price;
    font-size: 18px;
    font-weight: 900;
    width: 90px;
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
    background-color: var(--button-green);
    border-radius: 20px;
    font-size: 0.8rem;
    padding: 0.4rem;
    padding: 0.5rem;

    font-weight: 600;
    color: white;
    font-family: Petrona;
    margin-right: 0.3rem;
    &:hover {
      background-color: var(--brand-light-green-2);
      color: var(--text-black);
    }
  }
  @media screen and (min-width: 420px) {
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
    font-size: 13px;
    text-align: center;
    align-self: center;
  }
  margin-bottom: 1%;
`;
