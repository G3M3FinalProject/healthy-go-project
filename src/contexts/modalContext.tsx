import { createContext, ReactNode, useContext, useState } from "react";

interface IModalContextProviderData {
  isAddressModalOpen: boolean;
  setIsAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessModalOpen: boolean;
  setIsSucessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalMenuOpen: boolean;
  setisModalMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalContextProps {
  children: ReactNode;
}

const ModalContext = createContext({} as IModalContextProviderData);

export const ModalProvider = ({ children }: IModalContextProps) => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSucessModalOpen] = useState(false);
  const [isModalMenuOpen, setisModalMenuOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isAddressModalOpen,
        setIsAddressModalOpen,
        isSuccessModalOpen,
        setIsSucessModalOpen,
        isModalMenuOpen,
        setisModalMenuOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
