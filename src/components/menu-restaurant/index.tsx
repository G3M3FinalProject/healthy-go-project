import { useParams } from "react-router-dom";

import { v4 as uuid } from "uuid";

import { useCart } from "../../contexts/cartContext";
import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import {
  ContainerMenu,
  ContainerP,
  ContainerPreco,
  ContainerSection,
  ContainerDivMenu,
} from "./styles";

export interface IProduct {
  item: string;
  price: number;
  promo: number;
  photo_url: string;
  category: string[];
  description: string;
}

export const MenuRestaurant = () => {
  const { findRestaurantInfo, filteredMenu } = useRestaurantProductsContext();
  const { id } = useParams();
  const { addToCart } = useCart();

  findRestaurantInfo(id);

  const subTitles = {
    food: "Pratos",
    drinks: "Bebidas",
    deserts: "Sobremesas",
  };

  const categoryFix = (categories: string[]) => {
    return categories?.map((category) => {
      const unique_id = uuid();
      const categoryThreated = category
        .split("-")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
      return <span key={unique_id}>{categoryThreated}</span>;
    });
  };

  return (
    <ContainerMenu>
      {!!filteredMenu &&
        Object.entries(filteredMenu).map(([key, value]) => {
          return (
            !!value.length && (
              <ContainerDivMenu key={value}>
                <h2>{subTitles[key]}</h2>
                <ul>
                  {value?.map((product) => {
                    return (
                      <li
                        key={Math.floor(Date.now() * Math.random()).toString(
                          36,
                        )}
                      >
                        <div>
                          <img src={product.photo_url} />
                          <ContainerSection>
                            <h4>{product.item}</h4>
                            <ContainerP>
                              {categoryFix(product.category)}
                            </ContainerP>
                            <ContainerPreco>
                              {product.price.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </ContainerPreco>
                          </ContainerSection>
                        </div>
                        <button onClick={() => addToCart(product)}>
                          Adicionar ao carrinho
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </ContainerDivMenu>
            )
          );
        })}
    </ContainerMenu>
  );
};
