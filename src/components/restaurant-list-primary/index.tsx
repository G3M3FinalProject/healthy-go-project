import {} from "../../contexts/restaurantProductsContext";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { RestaurantItem } from "../restaurant-item";
import { MainList, PrimaryItem } from "./styles";

export const RestaurantListPrimary = () => {
  const { filteredRestaurants, allRestaurants } = useRestaurantsContext();
  const MainRestaurantsFiltered = filteredRestaurants.slice(0, 4);
  const MainRestaurants = allRestaurants.slice(0, 4);

  return (
    <MainList>
      {MainRestaurantsFiltered
        ? MainRestaurantsFiltered?.map((restaurant) => {
            return (
              <PrimaryItem key={restaurant.id}>
                <RestaurantItem restaurant={restaurant} />
              </PrimaryItem>
            );
          })
        : MainRestaurants?.map((restaurant) => {
            return (
              <PrimaryItem key={restaurant.id}>
                <RestaurantItem restaurant={restaurant} />
              </PrimaryItem>
            );
          })}
    </MainList>
  );
};
