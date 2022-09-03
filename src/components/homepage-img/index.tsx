import Heart from "../../assets/homepage-images/ame.png";
import Review from "../../assets/homepage-images/review.png";
import SaladGirl from "../../assets/homepage-images/saladgirl.png";
import {
  Figure,
  FloatContainer,
  Person,
  HeartFloat,
  ReviewFloat,
} from "./styles";

export const HomePageImage = () => {
  return (
    <Figure>
      <Person src={SaladGirl} alt="homeImage" />
      <FloatContainer>
        <HeartFloat src={Heart} alt="homeImage" />
        <ReviewFloat src={Review} alt="homeImage" />
      </FloatContainer>
    </Figure>
  );
};
