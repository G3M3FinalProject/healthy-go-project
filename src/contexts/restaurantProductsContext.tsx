import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";

import { useRestaurantsContext } from "./restaurantsContext";

interface IRestaurantProductsProviderData {
  restaurantInfo: IRestaurantInfo;
  filteredMenu: IMenu;
  setFilteredMenu: React.Dispatch<React.SetStateAction<IMenu>>;
}

interface IRestaurantProductsProps {
  children: ReactNode;
}

export interface IProduct {
  item: string;
  price: number;
  promo: number;
  photo_url: string;
  category: string[];
  description: string;
  restaurant: string;
  id: number;
  amount: number;
  amountPrice: number;
  restaurantID: number;
  messageButtonProduct?: string;
}

export interface IMenu {
  food: IProduct[];
  drinks: IProduct[];
  deserts: IProduct[];
}

export interface IRestaurantInfo {
  category: string[];
  name: string;
  "logo-image": string;
  rate: number;
  id: number;
  menu: IMenu;
  "opening-hours": string;
  description: string;
}

const RestaurantProductsContext = createContext(
  {} as IRestaurantProductsProviderData,
);

export const RestaurantProductsProvider = ({
  children,
}: IRestaurantProductsProps) => {
  const { allRestaurants } = useRestaurantsContext();
  const [restaurantInfo, setRestaurantInfo] = useState<IRestaurantInfo>(
    {} as IRestaurantInfo,
  );
  const [filteredMenu, setFilteredMenu] = useState<IMenu>({} as IMenu);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const restaurantSelected = allRestaurants.find(
        (restaurant) => restaurant.id === +id,
      );

      //percorrer os 3 array de objetos adicionando Adicionar ao carrinho!

      if (restaurantSelected) {
        const newMenuArray = Object.entries(restaurantSelected.menu).map(
          ([key, value]) => {
            return value?.map((product) => {
              const newProduct = {
                ...product,
                messageButtonProduct: "Adicionar ao carrinho",
              };
              return newProduct;
            });
          },
        );

        const newMenuObj = {
          food: newMenuArray[0],
          drinks: newMenuArray[1],
          deserts: newMenuArray[2],
        };

        const newRestaurantSelected = {
          ...restaurantSelected,
          menu: newMenuObj,
        };

        setFilteredMenu(newRestaurantSelected?.menu);
        setRestaurantInfo(newRestaurantSelected);
      }
    }
  }, [id, allRestaurants]);

  return (
    <RestaurantProductsContext.Provider
      value={{
        restaurantInfo,
        filteredMenu,
        setFilteredMenu,
      }}
    >
      {children}
    </RestaurantProductsContext.Provider>
  );
};

export const useRestaurantProductsContext = () =>
  useContext(RestaurantProductsContext);
