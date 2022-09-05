import { useEffect, useState } from "react";

import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { SearchInputRestaurants } from "../search-input-home";
import { PositioningDiv, Container, FilterButton } from "./styles";

type IActualFilters = "vegan" | "vegetarian" | "zero-gluten" | "zero-lactose";

const HomePageFilters = () => {
  const { setFilteredRestaurants, allRestaurants } = useRestaurantsContext();
  const [actualFilters, setActualFilters] = useState<IActualFilters[]>([]);

  const toogleFilter = (filter: IActualFilters) => {
    actualFilters.includes(filter)
      ? setActualFilters((old) =>
          old.filter((actualFilter) => actualFilter !== filter),
        )
      : setActualFilters((old) => [...old, filter]);
  };

  useEffect(() => {
    const newRestaurants = allRestaurants.filter(({ category }) =>
      actualFilters.every((actualFilter) => {
        return category.includes(actualFilter);
      }),
    );
    setFilteredRestaurants(newRestaurants);
  }, [actualFilters]);

  actualFilters.some((filter) => filter === "vegetarian");
  return (
    <PositioningDiv>
      <SearchInputRestaurants />

      <Container>
        <FilterButton
          isActive={actualFilters.some((filter) => filter === "vegetarian")}
          onClick={() => toogleFilter("vegetarian")}
        >
          Vegetariano
        </FilterButton>
        <FilterButton
          isActive={actualFilters.some((filter) => filter === "vegan")}
          onClick={() => toogleFilter("vegan")}
        >
          Vegano
        </FilterButton>
        <FilterButton
          isActive={actualFilters.some((filter) => filter === "zero-gluten")}
          onClick={() => toogleFilter("zero-gluten")}
        >
          Zero Glúten
        </FilterButton>
        <FilterButton
          isActive={actualFilters.some((filter) => filter === "zero-lactose")}
          onClick={() => toogleFilter("zero-lactose")}
        >
          Zero Lactose
        </FilterButton>
      </Container>
    </PositioningDiv>
  );
};

export default HomePageFilters;
