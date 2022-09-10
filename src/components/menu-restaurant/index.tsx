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
  ContainerCategory,
  ContainerProduct,
  ContainerDivMenu,
} from "./styles";

export const MenuRestaurant = () => {
  const { filteredMenu, setFilteredMenu, restaurantInfo } =
    useRestaurantProductsContext();

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
      let categoryThreated = category
        .split("-")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
      if (categoryThreated === "Vegan") categoryThreated = "Vegano";
      else if (categoryThreated === "Vegetarian")
        categoryThreated = "Vegetariano";

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
                      <ContainerProduct
                        isMessageButtonAdd={product.messageButtonProduct}
                        key={Math.floor(Date.now() * Math.random()).toString(
                          36,
                        )}
                      >
                        <img src={product.photo_url} />
                        <h4>{product.item}</h4>
                        <ContainerCategory>
                          {categoryFix(product.category)}
                        </ContainerCategory>
                        <p className="preco">
                          {product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                        <button
                          onClick={() => {
                            if (
                              user &&
                              Object.keys(user as IUser).length !== 0
                            ) {
                              addToCart(product);

                              const actualIndex = restaurantInfo.menu[
                                key
                              ].findIndex((prod) => prod.id === product.id);

                              setFilteredMenu((old) => {
                                const newMenu = { ...old };
                                newMenu[key][actualIndex].messageButtonProduct =
                                  "Produto adicionado!";
                                return { ...newMenu };
                              });
                              setTimeout(() => {
                                setFilteredMenu((old) => {
                                  const newMenu = { ...old };
                                  newMenu[key][
                                    actualIndex
                                  ].messageButtonProduct =
                                    "Adicionar ao carrinho";
                                  return { ...newMenu };
                                });
                              }, 1500);
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
                          {product.messageButtonProduct}
                        </button>
                      </ContainerProduct>
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
