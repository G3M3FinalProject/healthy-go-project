import Heart from "../../assets/homepage-images/ame.png";
import Cantinho from "../../assets/homepage-images/cantinhoveganoFloat.png";
import Habitue from "../../assets/homepage-images/habitueFloat.png";
import Mamae from "../../assets/homepage-images/mamaeFloat.png";
import Review from "../../assets/homepage-images/review.png";
import SaladGirl from "../../assets/homepage-images/saladgirl.png";
import {
  Figure,
  FloatContainer,
  Person,
  HeartFloat,
  ReviewFloat,
  RestaurantDivs,
} from "./styles";

export const HomePageImage = () => {
  return (
    <Figure>
      <Person src={SaladGirl} alt="Woman holding a bowl and a mug" />
      <FloatContainer>
        <HeartFloat src={Heart} alt="Floating Heart" />
        <ReviewFloat src={Review} alt="Floating Stars" />
      </FloatContainer>
      <RestaurantDivs>
        <img src={Mamae} alt="Mamae restaurant" />
        <img className="lower" src={Cantinho} alt="Habitue restaurant" />
        <img src={Habitue} alt="Cantinho restaurant" />
      </RestaurantDivs>
    </Figure>
  );
};
