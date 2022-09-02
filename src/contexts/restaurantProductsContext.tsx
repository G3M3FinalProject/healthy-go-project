import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services";

interface IRestaurantProductsProviderData {
  restaurantInfo: IRestaurantInfo;
  filteredMenu: IMenu;
  setFilteredMenu: React.Dispatch<React.SetStateAction<IMenu>>;
  findRestaurantInfo: (id: string | undefined) => void;
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
  const [restaurantInfo, setRestaurantInfo] = useState<IRestaurantInfo>(
    {} as IRestaurantInfo,
  );
  const [filteredMenu, setFilteredMenu] = useState<IMenu>({} as IMenu);

  const findRestaurantInfo = (id: string | undefined) => {
    useEffect(() => {
      api
        .get(`/restaurants/${id}`)
        .then((response) => {
          setRestaurantInfo(response.data);
          setFilteredMenu(response.data.menu);
        })
        .catch((err) => console.log(err));
    }, []);
  };

  return (
    <RestaurantProductsContext.Provider
      value={{
        restaurantInfo,
        filteredMenu,
        findRestaurantInfo,
        setFilteredMenu,
      }}
    >
      {children}
    </RestaurantProductsContext.Provider>
  );
};

export const useRestaurantProductsContext = () =>
  useContext(RestaurantProductsContext);
