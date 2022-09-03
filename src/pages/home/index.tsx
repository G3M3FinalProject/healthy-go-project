import Footer from "../../components/footer";
import HomePageFilters from "../../components/homepage-filters";
import { HomePageImage } from "../../components/homepage-img";
import { RestaurantListPrimary } from "../../components/restaurant-list-primary";
import { RestaurantListSecondary } from "../../components/restaurant-list-secondary";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Container>
        <HomePageFilters />
        <RestaurantListPrimary />
        <RestaurantListSecondary />
        <HomePageImage />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
