import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { RestaurantItem } from "../restaurant-item";
import { SecondaryItem, SecondaryList } from "./styles";

export const RestaurantListSecondary = () => {
  const { filteredRestaurants, allRestaurants } = useRestaurantsContext();

  const OtherRestaurantsFiltered = filteredRestaurants.slice(4);
  const OtherRestaurants = allRestaurants.slice(4);

  return (
    <SecondaryList>
      {OtherRestaurantsFiltered
        ? OtherRestaurantsFiltered?.map((restaurant) => {
            return (
              <SecondaryItem key={restaurant.id}>
                <RestaurantItem restaurant={restaurant} />
              </SecondaryItem>
            );
          })
        : OtherRestaurants?.map((restaurant) => {
            return (
              <SecondaryItem key={restaurant.id}>
                <RestaurantItem restaurant={restaurant} />
              </SecondaryItem>
            );
          })}
    </SecondaryList>
  );
};
