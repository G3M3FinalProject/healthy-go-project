import toast from "react-hot-toast";

import { v4 as uuid } from "uuid";

import { IUser, useAuthUserContext } from "../../contexts/authUserContext";
import { useCart } from "../../contexts/cartContext";
import {
  IProduct,
  useRestaurantProductsContext,
} from "../../contexts/restaurantProductsContext";
import Loading from "../loading";
import {
  ContainerMenu,
  ContainerP,
  ContainerSection,
  ContainerDivMenu,
} from "./styles";

export const MenuRestaurant = () => {
  const { filteredMenu } = useRestaurantProductsContext();
  const { user } = useAuthUserContext();
  const { addToCart } = useCart();

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

  if (!filteredMenu) return <Loading />;

  return (
    <ContainerMenu>
      {!!filteredMenu &&
        Object.entries(filteredMenu).map(([key, value]) => {
          return (
            !!value.length && (
              <ContainerDivMenu key={JSON.stringify(value)}>
                <h2>{subTitles[key]}</h2>
                <ul>
                  {value?.map((product: IProduct) => {
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
                            <p className="preco">
                              {product.price.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </p>
                          </ContainerSection>
                        </div>
                        <div className="add-carrinho">
                          <button
                            onClick={() => {
                              if (
                                user &&
                                Object.keys(user as IUser).length !== 0
                              ) {
                                addToCart(product);
                              } else {
                                toast.error(
                                  "Você precisa estar logado para adicionar produtos ao carrinho!",
                                  {
                                    duration: 3000,
                                    id: "error-add-cart",
                                    position: "top-center",
                                  },
                                );
                              }
                            }}
                          >
                            Adicionar ao carrinho
                          </button>
                        </div>
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
