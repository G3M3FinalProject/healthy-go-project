import { HomePageImage } from "../../components/homepage-img";
import RestaurantList from "../../components/restaurant-list";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <RestaurantList />
      <HomePageImage />
    </Container>
  );
};

export default Home;
