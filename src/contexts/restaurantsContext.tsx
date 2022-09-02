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
  filterRestaurants: (categoriesToFilter: string) => void;
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
  const [categoriesFiltered, setCategoriesFiltered] = useState<string[]>([]);

  useEffect(() => {
    api
      .get("/restaurants")
      .then((response) => {
        console.log(response);
        // setAllRestaurants(response.data);
        // Ver isso
        setFilteredRestaurants(response.data);
      })
      .catch((err) => console.log(err));
    console.log(filteredRestaurants);
  }, []);

  const filterRestaurants = (categoriesToFilter: string) => {
    setCategoriesFiltered((old) => [...old, categoriesToFilter]);

    const newRestaurants = allRestaurants.filter(({ category }) => {
      // categoriesToFilter = ['vegan', 'vegetarian']
      //category = ['vegan', 'lactose']
      return categoriesFiltered.some((catFiltered) =>
        category.some((cat) => catFiltered === cat),
      );
    });
    setFilteredRestaurants(newRestaurants);
  };

  //filtrar vegetarian oo vegano tbm

  return (
    <RestaurantsContext.Provider
      value={{
        allRestaurants,
        filteredRestaurants,
        filterRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurantsContext = () => useContext(RestaurantsContext);
