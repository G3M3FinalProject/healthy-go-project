import Footer from "../../components/footer";
import HomePageFilters from "../../components/homepage-filters";
import { HomePageImage } from "../../components/homepage-img";
import { RestaurantListPrimary } from "../../components/restaurant-list-primary";
import { RestaurantListSecondary } from "../../components/restaurant-list-secondary";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { Container } from "./styles";

const Home = () => {
  const { filteredRestaurants } = useRestaurantsContext();
  return (
    <>
      <Container>
        <HomePageFilters />
        {filteredRestaurants.length === 0 ? (
          <div>O restaurante pesquisado não foi encontrado.</div>
        ) : (
          <>
            <RestaurantListPrimary />
            <RestaurantListSecondary />
          </>
        )}
        <HomePageImage />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
