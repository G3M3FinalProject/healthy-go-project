import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { addressApi } from "../services";

interface IAddressContextProviderData {
  address?: IAddress;
  getAddress: () => void;
  clearAddress: () => void;
}

interface IAddressContextProps {
  children: ReactNode;
}
interface IAddress {
  city: string;
  state: string;
  postal: number;
}
interface IResAddress {
  data?: IAddress;
}

const AddressContext = createContext({} as IAddressContextProviderData);

export const AddressContextProvider = ({ children }: IAddressContextProps) => {
  const [address, setAddress] = useState<IAddress>();

  const clearAddress = () => {
    setAddress(undefined);
  };
  const getAddress = () => {
    addressApi
      .get("/50ad4a90-fd5e-11ec-b463-1717be8c9ff1")
      .then((res: IResAddress) => setAddress(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <AddressContext.Provider value={{ address, getAddress, clearAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);

// addressApi
