import React from "react";

import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { ContainerFilters } from "./styles";

const HomePageFilters = () => {
  const { setFilteredRestaurants, allRestaurants } = useRestaurantsContext();

  const filterRestaurants = (categoriesToFilter: string) => {
    const newRestaurants = allRestaurants.filter(({ category }) =>
      category.includes(categoriesToFilter),
    );
    setFilteredRestaurants(newRestaurants);
  };

  return (
    <ContainerFilters>
      <button onClick={() => filterRestaurants("vegetarian")}>
        Vegetariano
      </button>
      <button onClick={() => filterRestaurants("vegan")}>Vegano</button>
      <button onClick={() => filterRestaurants("zero-gluten")}>
        Zero Glúten
      </button>
      <button onClick={() => filterRestaurants("zero-lactose")}>
        Zero Lactose
      </button>
    </ContainerFilters>
  );
};

export default HomePageFilters;
