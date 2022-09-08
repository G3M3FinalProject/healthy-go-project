import { useState } from "react";

import allDishes from "../../assets/allDishes.png";
import allDishesHover from "../../assets/allDishesHover.png";
import desserts from "../../assets/desserts.png";
import dessertsHover from "../../assets/dessertsHover.png";
import drinks from "../../assets/drinks.png";
import drinksHover from "../../assets/drinksHover.png";
import food from "../../assets/food.png";
import foodHover from "../../assets/foodHover.png";
import {
  IMenu,
  useRestaurantProductsContext,
} from "../../contexts/restaurantProductsContext";
import { ButtonFilter, ContainerFilter } from "./style";

type ICategories = "drinks" | "food" | "deserts" | "all";

export const FilteredSearch = () => {
  const { setFilteredMenu, restaurantInfo } = useRestaurantProductsContext();

  const [actualFilter, setActualFilter] = useState("all");
  const filterByCategory = (category: ICategories) => {
    actualFilter === category || category === "all"
      ? (setFilteredMenu(restaurantInfo.menu), setActualFilter("all"))
      : (setFilteredMenu(() => {
          const newMenu: IMenu = {
            drinks: [],
            food: [],
            deserts: [],
          };
          newMenu[category] = restaurantInfo.menu[category];
          return newMenu;
        }),
        setActualFilter(category));
  };

  return (
    <ContainerFilter>
      <ButtonFilter
        data-hover="Pratos"
        onClick={() => filterByCategory("food")}
      >
        {actualFilter.includes("food") ? (
          <img src={foodHover} />
        ) : (
          <img src={food} />
        )}
      </ButtonFilter>
      <ButtonFilter
        data-hover="Bebidas"
        onClick={() => filterByCategory("drinks")}
      >
        {actualFilter.includes("drinks") ? (
          <img src={drinksHover} />
        ) : (
          <img src={drinks} />
        )}
      </ButtonFilter>
      <ButtonFilter
        data-hover="Sobremesas"
        onClick={() => filterByCategory("deserts")}
      >
        {actualFilter.includes("deserts") ? (
          <img src={dessertsHover} />
        ) : (
          <img src={desserts} className="deserts" />
        )}
      </ButtonFilter>

      <ButtonFilter
        data-hover="Todos"
        onClick={() => {
          filterByCategory("all");
        }}
      >
        {actualFilter.includes("all") ? (
          <img src={allDishesHover} />
        ) : (
          <img src={allDishes} />
        )}
      </ButtonFilter>
    </ContainerFilter>
  );
};
