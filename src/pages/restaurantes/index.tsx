import { useEffect, useState } from "react";

import { IProduct, ListProduct } from "../../components/listaItensRestaurante";
import { api } from "../../services";
import logoRestMama from "./logoRestMama.jpg";
import { ContainerHeader } from "./style";

interface IMenu {
  food: IProduct[];
  drinks: IProduct[];
  deserts: IProduct[];
}

export interface IMenuProps {
  menu: IMenu;
}

export const RestaurantedaMamae = () => {
  const [isMenu, setIsMenu] = useState<IMenu>({} as IMenu);

  useEffect(() => {
    api
      .get("/restaurants/1")
      .then((response) => {
        setIsMenu(response.data.menu);
        //console.log(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ContainerHeader>
        <div>
          <h3>Restaurante da Mamãe</h3>
          <p>Horário de funcionamento: 11:00 às 20:00</p>
        </div>
        <figure>
          <img src={logoRestMama} alt={"Logo do restaurante da Mamãe"} />
        </figure>
      </ContainerHeader>
      <ListProduct menu={isMenu} />
    </>
  );
};
