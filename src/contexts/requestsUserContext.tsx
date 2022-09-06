import { createContext, ReactNode, useContext } from "react";
import React from "react";
import { toast } from "react-hot-toast";

import { v4 as uuid } from "uuid";

import { api } from "../services";
import {
  IUserEditRes,
  IUserRequests,
  useAuthUserContext,
} from "./authUserContext";
import { useCart } from "./cartContext";
import { useModalContext } from "./modalContext";

const RequestsUserContext = createContext(
  {} as IRequestsUserContextProviderData,
);
interface IRequestsUserContextProps {
  children: ReactNode;
}

export interface IUserRequestPayament {
  payament: string;
}
interface IRequestsUserContextProviderData {
  postUserRequest: (data: IUserRequestPayament) => void;
}

export const RequestsUserContextProvider = ({
  children,
}: IRequestsUserContextProps) => {
  const { setUser, user } = useAuthUserContext();
  const { setIsSucessModalOpen, isSuccessModalOpen } = useModalContext();
  const { totalCart, setCart } = useCart();

  const postUserRequest = (data: IUserRequestPayament) => {
    if (totalCart === 0) {
      return toast.error(
        "Você precisa adicionar produtos ao carrinho para realizar a compra!",
      );
    }
    console.log(isSuccessModalOpen);
    const userID = user?.id;
    const unique_id = uuid();
    const date = new Date();
    const current_date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const requestsInfo = {
      ...data,
      id: unique_id,
      status: "Em andamento",
      date: current_date,
      total: totalCart,
    };
    const allUserRequests = user?.requests
      ? [...(user?.requests as unknown as IUserRequests[]), requestsInfo]
      : [requestsInfo];

    const reqRequests = {
      requests: allUserRequests,
    };

    api
      .patch(`/users/${userID}`, reqRequests)
      .then((res: IUserEditRes) => {
        setUser(res.data);
        setCart([]);
        const userString = JSON.stringify(user);
        localStorage.setItem("@healthyGo-user", userString);
        setIsSucessModalOpen(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <RequestsUserContext.Provider value={{ postUserRequest }}>
      {children}
    </RequestsUserContext.Provider>
  );
};

export const useRequestsUserContext = () => useContext(RequestsUserContext);
