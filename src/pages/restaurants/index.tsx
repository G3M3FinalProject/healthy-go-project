import { MenuRestaurant } from "../../components/menu-restaurant";
import SearchInput from "../../components/search-input";
import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import { ContainerHeader } from "./styles";

export const Restaurants = () => {
  const { restaurantInfo } = useRestaurantProductsContext();

  return (
    <>
      <SearchInput />
      <ContainerHeader>
        <div>
          <h3>{restaurantInfo.name}</h3>
          <p>Horário de funcionamento: {restaurantInfo["opening-hours"]}</p>
        </div>
        <figure>
          <img
            src={restaurantInfo["logo-image"]}
            alt={"Logo do restaurante da Mamãe"}
          />
        </figure>
      </ContainerHeader>
      {!!restaurantInfo && <MenuRestaurant />}
    </>
  );
};
