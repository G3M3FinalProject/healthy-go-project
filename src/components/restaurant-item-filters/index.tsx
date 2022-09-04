import { useState } from "react";

import Bebida from "../../assets/Bebida.png";
import Comida from "../../assets/Comida.png";
import ComidaeBebida from "../../assets/ComidaeBebida.png";
import drinksHover from "../../assets/drinksHover.png";
import foodHover from "../../assets/foodHover.png";
import {
  IMenu,
  useRestaurantProductsContext,
} from "../../contexts/restaurantProductsContext";
import { ButtonFilter, ContainerFilter } from "./style";

type ICategories = "drinks" | "food" | "deserts";

export const FilteredSearch = () => {
  const { setFilteredMenu, restaurantInfo, filteredMenu } =
    useRestaurantProductsContext();

  const [actualFilter, setActualFilter] = useState("");

  const filterByCategory = (category: ICategories) => {
    actualFilter === category
      ? (setFilteredMenu(restaurantInfo.menu), setActualFilter(""))
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
  //! Ver se vai ser essa foto mesmo pra sobremesa.

  return (
    <ContainerFilter>
      <ButtonFilter
        isActive={!!filteredMenu.food}
        onClick={() => filterByCategory("food")}
      >
        {actualFilter.includes("food") ? (
          <img src={foodHover} />
        ) : (
          <img src={Comida} />
        )}
      </ButtonFilter>
      <ButtonFilter
        isActive={!!filteredMenu.drinks}
        onClick={() => filterByCategory("drinks")}
      >
        {actualFilter.includes("drinks") ? (
          <img src={drinksHover} />
        ) : (
          <img src={Bebida} />
        )}
      </ButtonFilter>
      <ButtonFilter
        isActive={!!filteredMenu.deserts}
        onClick={() => filterByCategory("deserts")}
      >
        {filteredMenu.deserts ? (
          <img src={ComidaeBebida} />
        ) : (
          <img src={ComidaeBebida} />
        )}
      </ButtonFilter>
    </ContainerFilter>
  );
};
