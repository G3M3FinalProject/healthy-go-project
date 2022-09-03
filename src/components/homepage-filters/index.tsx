import { useEffect, useState } from "react";

import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import SearchInput from "../search-input";
import { PositioningDiv, Container } from "./styles";

type IActualFilters = "vegan" | "vegetarian" | "zero-gluten" | "zero-lactose";

const HomePageFilters = () => {
  const { setFilteredRestaurants, allRestaurants } = useRestaurantsContext();
  const [actualFilters, setActualFilters] = useState<IActualFilters[]>([]);

  const addFilter = (filter: IActualFilters) => {
    setActualFilters((old) => [...old, filter]);
  };

  const filterRestaurants = (categoriesToFilter: string) => {
    const newRestaurants = allRestaurants.filter(({ category }) =>
      category.includes(categoriesToFilter),
    );
    setFilteredRestaurants(newRestaurants);
  };

  useEffect(() => {
    const newRestaurants = allRestaurants.filter(({ category }) =>
      actualFilters.some((actualFilter) => category.includes(actualFilter)),
    );
    console.log(newRestaurants);
    setFilteredRestaurants(newRestaurants);
  }, [actualFilters]);

  return (
    <PositioningDiv>
      <SearchInput />

      <Container>
        <button onClick={() => addFilter("vegetarian")}>Vegetariano</button>
        <button onClick={() => addFilter("vegan")}>Vegano</button>
        <button onClick={() => addFilter("zero-gluten")}>Zero Glúten</button>
        <button onClick={() => addFilter("zero-lactose")}>Zero Lactose</button>
      </Container>
    </PositioningDiv>
  );
};

export default HomePageFilters;
