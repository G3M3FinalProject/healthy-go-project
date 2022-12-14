import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import { useAuthUserContext } from "../../../../contexts/authUserContext";
import { useModalContext } from "../../../../contexts/modalContext";
import {
  ContainerAdress,
  DivAdress,
  DivPicture,
  SelectAddressInput,
  OverflowContainer,
  AdressSelector,
  ErrorMessage,
} from "./style";

interface ISelectAddressForm {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldErrorsImpl<{
    payament: string;
    cvv: string;
    validityDate: string;
    titularName: string;
    cardNumber: number;
    address: {
      adressIdentification: string;
      id: number;
      city: string;
      state: string;
      postal: string;
      street: string;
      district: string;
      number: number;
      complement: string;
    };
  }>;
}

export const SelectAddressForm = ({ register, errors }: ISelectAddressForm) => {
  const { user } = useAuthUserContext();
  const { setIsAddressModalOpen } = useModalContext();

  return (
    <ContainerAdress>
      <SelectAddressInput>
        <h2>Selecione seu endereço</h2>
        <button type="button" onClick={() => setIsAddressModalOpen(true)}>
          + Adicionar Endereço
        </button>
      </SelectAddressInput>
      <OverflowContainer>
        {user?.address?.map((address, index) => {
          return (
            <DivAdress key={address.id}>
              <DivPicture>
                <GoLocation style={{ width: "20px", height: "20px" }} />
                <h4>{address.adressIdentification}</h4>
              </DivPicture>
              <AdressSelector>
                <p>
                  <span>{address.street} </span>
                  <span>{address.number} </span>
                  <span>{address.district} </span>
                  <span>{address.city} </span>
                  <span>{address.state} </span>
                  <span>{address.postal} </span>
                </p>
                <input
                  {...register("address")}
                  type="radio"
                  name="address"
                  value={index}
                />
              </AdressSelector>
            </DivAdress>
          );
        })}
      </OverflowContainer>
      {errors.address?.message && (
        <ErrorMessage>
          <AiOutlineWarning />
          <p>
            É necessário adicionar/selecionar um endereço para finalizar o
            pedido!
          </p>
        </ErrorMessage>
      )}
    </ContainerAdress>
  );
};
