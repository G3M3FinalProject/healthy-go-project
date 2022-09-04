import locationon from "../../../assets/locationon.svg";
import {} from "../../../contexts/addressContext";
import { useAuthUserContext } from "../../../contexts/authUserContext";
import { useModalContext } from "../../../contexts/modalContext";
import { ContainerAdress, DivAdress, DivPicture } from "./style";

export function Adress() {
  const { user } = useAuthUserContext();
  const { setIsAddressModalOpen } = useModalContext();
  return (
    <ContainerAdress>
      <div>
        <h2>Selecione seu endereço</h2>
        <button onClick={() => setIsAddressModalOpen(true)}>
          + Adicionar Endereço
        </button>
      </div>
      <DivAdress>
        {user?.address?.map((address) => {
          return (
            <div key={address.id}>
              <h4>{address.adressIdentification}</h4>
              <DivPicture>
                <img src={locationon} />
              </DivPicture>
              <p>
                <span>{address.street} </span>
                <span>{address.number} </span>
                <span>{address.district} </span>
                <span>{address.city} </span>
                <span>{address.state} </span>
                <span>{address.postal} </span>
              </p>
            </div>
          );
        })}
      </DivAdress>
    </ContainerAdress>
  );
}
