import { IMenuProps } from "../../pages/restaurantes";
import {
  ContainerP,
  ContainerPreco,
  ContainerSection,
  ContainerUl,
} from "./style";

export interface IProduct {
  item: string;
  price: number;
  promo: number;
  photo_url: string;
  category: string[];
  description: string;
}

export const ListProduct = ({ menu }: IMenuProps) => {
  console.log(menu);
  return (
    <ContainerUl>
      <h2>Pratos</h2>
      {!!menu.food &&
        menu.food.map(
          ({ item, price, promo, photo_url, category, description }) => {
            return (
              <li key={item}>
                <div>
                  <img src={photo_url} />
                  <ContainerSection>
                    <h4>{item}</h4>
                    <ContainerP>{category}</ContainerP>
                    <ContainerPreco>
                      {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </ContainerPreco>
                    <ContainerPreco>{promo}</ContainerPreco>
                  </ContainerSection>
                </div>
                <button>Adicionar ao carrinho</button>
              </li>
            );
          },
        )}
      <h2>Bebidas</h2>
      {!!menu.drinks &&
        menu.drinks.map(
          ({ item, price, promo, photo_url, category, description }) => {
            return (
              <li key={item}>
                <div>
                  <img src={photo_url} />
                  <ContainerSection>
                    <h4>{item}</h4>
                    <ContainerP>{category}</ContainerP>
                    <ContainerPreco>
                      {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </ContainerPreco>
                    <ContainerPreco>{promo}</ContainerPreco>
                  </ContainerSection>
                </div>
                <button>Adicionar ao carrinho</button>
              </li>
            );
          },
        )}
      <h2>Sobremesas</h2>
      {!!menu.deserts &&
        menu.deserts.map(
          ({ item, price, promo, photo_url, category, description }) => {
            return (
              <li key={item}>
                <div>
                  <img src={photo_url} />
                  <ContainerSection>
                    <h4>{item}</h4>
                    <ContainerP>{category}</ContainerP>
                    <ContainerPreco>
                      {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </ContainerPreco>
                    <ContainerPreco>{promo}</ContainerPreco>
                  </ContainerSection>
                </div>
                <button>Adicionar ao carrinho</button>
              </li>
            );
          },
        )}
    </ContainerUl>
  );
};
