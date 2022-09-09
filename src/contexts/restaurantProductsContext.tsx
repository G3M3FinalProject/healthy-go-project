import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import { api } from "../services";
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
      if (restaurantSelected) {
        setFilteredMenu(restaurantSelected?.menu);
        setRestaurantInfo(restaurantSelected);
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
