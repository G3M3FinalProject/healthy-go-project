import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { v4 as uuid } from "uuid";

import { addressApi, api } from "../services";
import { IUserEditRes, useAuthUserContext } from "./authUserContext";

interface IAddressContextProviderData {
  address?: IAddress;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAddress: (setValue: any) => void;
  clearAddress: () => void;
  registerNewAdressUser: (data: ICompleteAddress) => void;
}

interface IAddressContextProps {
  children: ReactNode;
}

export interface ICompleteAddress {
  adressIdentification: string;
  id: string;
  city: string;
  state: string;
  postal: string;
  street: string;
  district: string;
  number: number;
  complement?: string;
}

interface IResAddress {
  data: IAddress;
}
interface IAddress {
  city: string;
  state: string;
  postal: number;
}

const AddressContext = createContext({} as IAddressContextProviderData);

export const AddressContextProvider = ({ children }: IAddressContextProps) => {
  const { setUser, user } = useAuthUserContext();
  const [address, setAddress] = useState<IAddress>();

  const clearAddress = () => {
    setAddress(undefined);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getAddress = (setValue: any) => {
    addressApi
      .get("/50ad4a90-fd5e-11ec-b463-1717be8c9ff1")
      .then((res: IResAddress) => {
        if (res.data.state === null) {
          return toast.error(
            "Não foi possível resgatar as informações da sua localização atual.",
          );
        }
        const postalRes = `${res.data.postal}-000`;

        setValue("state", res.data.state);
        setValue("city", res.data.city);
        setValue("postal", postalRes);
      })
      .catch(() =>
        toast.error("Desative o adBlock para obter a localização atual!", {
          id: "address-error",
        }),
      );
  };

  const registerNewAdressUser = (data: ICompleteAddress) => {
    const userID = user?.id;
    const unique_id = uuid();
    const dataWithID = { ...data, id: unique_id };
    const allUserAddress = user?.address
      ? [...(user?.address as unknown as ICompleteAddress[]), dataWithID]
      : [dataWithID];
    const reqAdress = {
      address: allUserAddress,
    };

    api
      .patch(`/users/${userID}`, reqAdress)
      .then((res: IUserEditRes) => {
        setUser(res.data);
      })
      .catch(() =>
        toast.error(
          "Não foi possível adicionar o endereço, nosso banco de dados está com problemas.",
          {
            id: "address-error-2",
          },
        ),
      );
  };

  return (
    <AddressContext.Provider
      value={{ address, getAddress, clearAddress, registerNewAdressUser }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);

// addressApi
