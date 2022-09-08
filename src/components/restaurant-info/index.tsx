import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import Loading from "../loading";
import { MenuRestaurant } from "../menu-restaurant";
import { Container, ContainerHeader } from "./styles";

export const RestaurantInfo = () => {
  const { restaurantInfo } = useRestaurantProductsContext();

  if (Object.keys(restaurantInfo).length === 0) return <Loading />;

  return (
    <Container>
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
    </Container>
  );
};
