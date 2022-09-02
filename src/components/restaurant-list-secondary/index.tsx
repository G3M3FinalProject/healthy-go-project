import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { RestaurantItem } from "../restaurant-item";
import { SecondaryItem, SecondaryList } from "./styles";

export const RestaurantListSecondary = () => {
  const { filteredRestaurants } = useRestaurantsContext();

  const OtherRestaurants = filteredRestaurants.slice(4);
  return (
    <SecondaryList>
      {OtherRestaurants?.map((restaurant) => {
        return (
          <SecondaryItem key={restaurant.id}>
            <RestaurantItem restaurant={restaurant} />
          </SecondaryItem>
        );
      })}
    </SecondaryList>
  );
};
