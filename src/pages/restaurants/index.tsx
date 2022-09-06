import Loading from "../../components/loading";
import { MenuRestaurant } from "../../components/menu-restaurant";
import { FilteredSearch } from "../../components/restaurant-item-filters";
import { SearchInputProducts } from "../../components/search-input-products";
import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { ContainerHeader, ContainerRestaurants, ContainerTop } from "./styles";

export const Restaurants = () => {
  const { restaurantInfo } = useRestaurantProductsContext();
  const { isLoading } = useRestaurantsContext();

  if (isLoading) return <Loading />;

  return (
    <ContainerRestaurants>
      <ContainerTop>
        <FilteredSearch />
        <SearchInputProducts />
      </ContainerTop>
      <ContainerHeader>
        <div>
          <h3>{restaurantInfo.name}</h3>
          <p>Horário de funcionamento: {restaurantInfo["opening-hours"]}</p>
        </div>
        <figure>
          <img src={restaurantInfo["logo-image"]} alt={restaurantInfo.name} />
        </figure>
      </ContainerHeader>
      {!!restaurantInfo && <MenuRestaurant />}
    </ContainerRestaurants>
  );
};
