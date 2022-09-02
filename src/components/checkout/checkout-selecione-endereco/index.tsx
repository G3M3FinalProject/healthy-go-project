import locationon from "../../../assets/locationon.svg";
import { ContainerAdress, DivAdress, DivPicture } from "./style";

export function Adress() {
  return (
    <ContainerAdress>
      <div>
        <h2>Selecione seu endereço</h2>
        <button>+ Adicionar Endereço</button>
      </div>
      <DivAdress>
        <h4>Casa</h4>
        <DivPicture>
          <p>
            <img src={locationon} />
            endereço residencial
          </p>
        </DivPicture>
      </DivAdress>
    </ContainerAdress>
  );
}
