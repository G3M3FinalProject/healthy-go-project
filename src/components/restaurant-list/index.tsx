import {} from "../../contexts/restaurantProductsContext";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { RestaurantItem } from "../restaurant-item";
import { MainList, Container, SecondaryList } from "./styles";

const RestaurantList = () => {
  const { allRestaurants, filteredRestaurants } = useRestaurantsContext();
  const MainRestaurants = filteredRestaurants.slice(0, 4);
  const OtherRestaurants = filteredRestaurants.slice(4);
  return (
    <Container>
      <MainList>
        {MainRestaurants?.map((restaurant) => (
          <RestaurantItem restaurant={restaurant} key={restaurant.id} />
        ))}
      </MainList>
      <SecondaryList>
        {OtherRestaurants?.map((restaurant) => (
          <RestaurantItem restaurant={restaurant} key={restaurant.id} />
        ))}
      </SecondaryList>
    </Container>
  );
};

export default RestaurantList;
