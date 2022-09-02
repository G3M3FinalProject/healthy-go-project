import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { v4 as uuid } from "uuid";

import { IRestaurantInfo } from "../../contexts/restaurantProductsContext";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import {
  CategoriesStyled,
  Container,
  ContainerMainText,
  IconItem,
} from "./styles";

interface IRestaurantItemProps {
  restaurant: IRestaurantInfo;
}

export const RestaurantItem = ({ restaurant }: IRestaurantItemProps) => {
  const restaurantCategories = (categories: string[]) => {
    return categories?.map((category) => {
      const unique_id = uuid();
      const categoryThreated = category
        .split("-")
        .map((e) => {
          return e === "vegatarian"
            ? "Vegetariano"
            : e.charAt(0).toUpperCase() + e.slice(1);
        })
        .join(" ");
      return <span key={unique_id}>{categoryThreated}</span>;
    });
  };

  return (
    <Container>
      <Link to={`/restaurants/${restaurant.id}`}>
        <ContainerMainText>
          <div className="restaurant__title-rate">
            <h3>{restaurant.name}</h3>
            <div className="restaurant__rate">
              <AiFillStar />
              <span>{restaurant.rate}</span>
            </div>
          </div>
          <CategoriesStyled>
            {restaurantCategories(restaurant.category)}
          </CategoriesStyled>
          <p>{restaurant.description}</p>
        </ContainerMainText>
        <figure>
          <img src={restaurant["logo-image"]} alt={restaurant.name} />
        </figure>
        <IconItem>
          <AiOutlineHeart />
        </IconItem>
      </Link>
    </Container>
  );
};
