import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useModalContext } from "../../contexts/modalContext";
import { useRestaurantsContext } from "../../contexts/restaurantsContext";
import { SearchInputStyle } from "../../styles/SearchInputStyles";

export const SearchInputRestaurants = () => {
  const { setFilteredRestaurants, allRestaurants, setIsFilterActive } =
    useRestaurantsContext();
  const [restaurantSearched, setRestaurantSearched] = useState("");
  const { isModalMenuOpen } = useModalContext();

  const removeAccents = (string: string) => {
    return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const getFilteredRestaurant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFilterActive(true);
    const searchedRestaurants = allRestaurants.filter((restaurant) => {
      return removeAccents(restaurant.name).includes(
        removeAccents(restaurantSearched),
      );
    });

    if (searchedRestaurants) {
      setFilteredRestaurants(searchedRestaurants);
    }
  };

  return (
    <SearchInputStyle isMenuOpen={isModalMenuOpen}>
      <form onSubmit={(e) => getFilteredRestaurant(e)}>
        <input
          onChange={(event) => setRestaurantSearched(event.target.value)}
          value={restaurantSearched}
          type="text"
          placeholder="Pesquisar por..."
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </SearchInputStyle>
  );
};
