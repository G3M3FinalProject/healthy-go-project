import Footer from "../../components/footer";
import HomePageFilters from "../../components/homepage-filters";
import { HomePageImage } from "../../components/homepage-img";
import Loading from "../../components/loading";
import { RestaurantListPrimary } from "../../components/restaurant-list-primary";
import { RestaurantListSecondary } from "../../components/restaurant-list-secondary";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { Container } from "./styles";

const Home = () => {
  const { filteredRestaurants, isFilterActive } = useRestaurantsContext();
  const { isLoading } = useRestaurantsContext();

  if (isLoading) return <Loading />;

  return (
    <>
      <Container>
        <HomePageFilters />
        {filteredRestaurants.length === 0 && isFilterActive ? (
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
