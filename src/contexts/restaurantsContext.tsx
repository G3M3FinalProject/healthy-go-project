import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services";
import { IRestaurantInfo } from "./restaurantProductsContext";

interface IRestaurantsProviderData {
  allRestaurants: IRestaurantInfo[];
  filteredRestaurants: IRestaurantInfo[];
  setFilteredRestaurants: React.Dispatch<
    React.SetStateAction<IRestaurantInfo[]>
  >;
  setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  isFilterActive: boolean;
}

interface IRestaurantsProps {
  children: ReactNode;
}

const RestaurantsContext = createContext({} as IRestaurantsProviderData);

export const RestaurantsProvider = ({ children }: IRestaurantsProps) => {
  const [allRestaurants, setAllRestaurants] = useState<IRestaurantInfo[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    IRestaurantInfo[]
  >([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    if (allRestaurants.length === 0) {
      api
        .get("/restaurants")
        .then((response) => {
          setAllRestaurants(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [allRestaurants]);

  return (
    <RestaurantsContext.Provider
      value={{
        allRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        isFilterActive,
        setIsFilterActive,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurantsContext = () => useContext(RestaurantsContext);
