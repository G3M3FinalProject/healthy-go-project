import { useState } from "react";

import searchIcon from "../../assets/searchIcon.svg";
import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import { Container } from "./styles";

const SearchInput = () => {
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

    const newMenuArray = Object.entries(menu).map(([key, value]) => {
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
    <Container>
      <form onSubmit={(e) => getFilteredProduct(e)}>
        <button type="submit">
          <img src={searchIcon} />
        </button>
        <input
          onChange={(event) => setProductSearched(event.target.value)}
          value={productSearched}
          type="text"
          placeholder="Digitar Pesquisa"
        />
      </form>
    </Container>
  );
};
export default SearchInput;
