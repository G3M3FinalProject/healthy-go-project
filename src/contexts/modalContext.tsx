import { createContext, ReactNode, useContext, useState } from "react";

interface IModalContextProviderData {
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalContextProps {
  children: ReactNode;
}

const ModalContext = createContext({} as IModalContextProviderData);

export const ModalProvider = ({ children }: IModalContextProps) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{ isProfileModalOpen, setIsProfileModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
