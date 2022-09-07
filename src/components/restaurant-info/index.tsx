import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import { ContainerHeader } from "../../pages/restaurants/styles";
import { MenuRestaurant } from "../menu-restaurant";

export const RestaurantInfo = () => {
  const { restaurantInfo } = useRestaurantProductsContext();

  return (
    <>
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
    </>
  );
};
