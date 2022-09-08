import { Outlet } from "react-router-dom";

import { FilteredSearch } from "../../components/restaurant-item-filters";
import { SearchInputProducts } from "../../components/search-input-products";
import { RestaurantProductsProvider } from "../../contexts/restaurantProductsContext";
import { ContainerRestaurants, ContainerTop } from "./styles";

export const Restaurants = () => {
  return (
    <RestaurantProductsProvider>
      <ContainerRestaurants>
        <ContainerTop>
          <SearchInputProducts />
          <FilteredSearch />
        </ContainerTop>
        <Outlet />
      </ContainerRestaurants>
    </RestaurantProductsProvider>
  );
};
