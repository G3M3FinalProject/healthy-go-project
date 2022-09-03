import { useEffect, useState } from "react";

import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import SearchInput from "../search-input";
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

  const filterRestaurants = (categoriesToFilter: string) => {
    const newRestaurants = allRestaurants.filter(({ category }) =>
      category.includes(categoriesToFilter),
    );
    setFilteredRestaurants(newRestaurants);
  };

  useEffect(() => {
    const newRestaurants = allRestaurants.filter(({ category }) =>
      // o array CATEGORIA [vegan vegetarian] TEM Q TER OS MESMOS Q O ARRAY ALL FILTERS [vegan] ok [vegan lactose vegetarian] no ok
      actualFilters.every((actualFilter) => {
        return category.includes(actualFilter);
      }),
    );
    console.log(newRestaurants);
    setFilteredRestaurants(newRestaurants);
  }, [actualFilters]);

  actualFilters.some((filter) => filter === "vegetarian");
  return (
    <PositioningDiv>
      <SearchInput />

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
