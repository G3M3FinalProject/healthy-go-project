import {} from "../../contexts/restaurantProductsContext";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { RestaurantItem } from "../restaurant-item";
import { MainList, PrimaryItem } from "./styles";

export const RestaurantListPrimary = () => {
  const { filteredRestaurants } = useRestaurantsContext();
  const MainRestaurants = filteredRestaurants.slice(0, 4);
  return (
    <MainList>
      {MainRestaurants?.map((restaurant) => {
        return (
          <PrimaryItem key={restaurant.id}>
            <RestaurantItem restaurant={restaurant} />
          </PrimaryItem>
        );
      })}
    </MainList>
  );
};
