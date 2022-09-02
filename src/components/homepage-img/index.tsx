import homeImage from "../../assets/homeImage.png";
import { Figure } from "./styles";

export const HomePageImage = () => {
  return (
    <Figure>
      <img src={homeImage} alt="homeImage" />
    </Figure>
  );
};
