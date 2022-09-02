import Bebida from "../../assets/Bebida.png";
import Comida from "../../assets/Comida.png";
import ComidaeBebida from "../../assets/ComidaeBebida.png";
import { ContainerFilter } from "./style";

export const FilteredSearch = () => {
  return (
    <ContainerFilter>
      <button>
        <img src={Comida} />
      </button>
      <button>
        <img src={Bebida} />
      </button>
      <button>
        <img src={ComidaeBebida} />
      </button>
    </ContainerFilter>
  );
};
