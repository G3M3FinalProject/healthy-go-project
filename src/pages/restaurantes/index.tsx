import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { string } from "yup";

import { SearchBar } from "../../components/global-inputs";
import { IProduct, ListProduct } from "../../components/listaItensRestaurante";
import { api } from "../../services";
import { ContainerHeader } from "./style";

export interface IMenu {
  food: IProduct[];
  drinks: IProduct[];
  deserts: IProduct[];
}

export interface IMenuProps {
  name: string;
  "logo-image": string;
  rate: number;
  id: number;
  menu: IMenu;
}

export const RestaurantedaMamae = () => {
  const [restaurantInfo, setRestaurantInfo] = useState<IMenuProps>(
    {} as IMenuProps,
  );
  const [filteredMenu, setFilteredMenu] = useState(restaurantInfo);
  const [inputSearch, setinputSearch] = useState("");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((response) => {
        setRestaurantInfo(response.data);
        setFilteredMenu(response.data.menu);
        //console.log(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <SearchBar />
      <ContainerHeader>
        <div>
          <h3>{restaurantInfo.name}</h3>
          <p>Horário de funcionamento: 11:00 às 20:00</p>
        </div>
        <figure>
          {/* <img src={} alt={"Logo do restaurante da Mamãe"} /> */}
        </figure>
      </ContainerHeader>
      {!!restaurantInfo && <ListProduct menu={restaurantInfo.menu} />}
    </>
  );
};
