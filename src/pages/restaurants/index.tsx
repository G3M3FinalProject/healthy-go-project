import { SearchBar } from "../../components/global-inputs";
import { MenuRestaurant } from "../../components/menu-restaurant";
import SearchInput from "../../components/search-input";
import { useRestaurantProductsContext } from "../../contexts/restaurantProductsContext";
import { ContainerHeader } from "./styles";

export const Restaurants = () => {
  const { restaurantInfo } = useRestaurantProductsContext();
  // function showMenu(event) {
  //   event.preventDefault();

  //   if (inputSearch === "") {
  //     setFilteredMenu(isMenu);
  //   }
  //   if (inputSearch !== "") {
  //     const itens = isMenu.filter((elem) => {
  //       const find = inputSearch.toUpperCase();
  //       const menuFood = elem.food.toUpperCase();
  //       const menuDrinks = elem.drinks.toUpperCase();
  //       const menuDeserts = elem.deserts.toUpperCase();
  //       if (
  //         menuFood.includes(find) ||
  //         menuDrinks.includes(find) ||
  //         menuDeserts.includes(find)
  //       ) {
  //         return elem;
  //       }
  //     });
  //     if (itens.length > 0) {
  //       setFilteredMenu(itens);
  //     }
  //   }
  // }

  return (
    <>
      <SearchInput />
      <ContainerHeader>
        <div>
          <h3>{restaurantInfo.name}</h3>
          <p>Horário de funcionamento: {restaurantInfo["opening-hours"]}</p>
        </div>
        <figure>
          <img
            src={restaurantInfo["logo-image"]}
            alt={"Logo do restaurante da Mamãe"}
          />
        </figure>
      </ContainerHeader>
      {!!restaurantInfo && <MenuRestaurant />}
    </>
  );
};
export {};
