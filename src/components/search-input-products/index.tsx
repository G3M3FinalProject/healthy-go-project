import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import { SearchInputStyle } from "../../styles/SearchInputStyles";

export const SearchInputProducts = () => {
  const { restaurantInfo, setFilteredMenu } = useRestaurantProductsContext();
  const [productSearched, setProductSearched] = useState("");

  const removeAccents = (string: string) => {
    return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const getFilteredProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const menu = restaurantInfo.menu;

    const newMenuArray = Object.entries(menu).map(([, value]) => {
      return value.filter(({ item, category }) => {
        let productIsCategory = false;
        if (category) {
          productIsCategory = removeAccents(item).includes(
            category
              .map((cat: string) =>
                removeAccents(cat).includes(removeAccents(productSearched)),
              )
              .join(" "),
          );
        }
        return (
          removeAccents(item).includes(removeAccents(productSearched)) ||
          productIsCategory
        );
      });
    });

    const newMenuObj = {
      food: newMenuArray[0],
      drinks: newMenuArray[1],
      deserts: newMenuArray[2],
    };
    newMenuArray;

    setFilteredMenu(newMenuObj);
  };
  return (
    <SearchInputStyle>
      <form onSubmit={(e) => getFilteredProduct(e)}>
        <input
          onChange={(event) => setProductSearched(event.target.value)}
          value={productSearched}
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
