import { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { v4 as uuid } from "uuid";

import { api } from "../services";
import {
  IUser,
  IUserEditRes,
  IUserRequests,
  useAuthUserContext,
} from "./authUserContext";
import { useCart } from "./cartContext";

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
  const { totalCart, setCart } = useCart();
  const navigate = useNavigate();

  const postUserRequest = (data: IUserRequestPayament) => {
    if (totalCart === 0) {
      return toast.error("Não há nada no carrinho");
    }
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
    console.log(reqRequests);

    api
      .patch(`/users/${userID}`, reqRequests)
      .then((res: IUserEditRes) => {
        setUser(res.data);
        setCart([]);
        const userString = JSON.stringify(user);
        localStorage.setItem("@healthyGo-user", userString);
        console.log(user + "teste");
        navigate("/home", { replace: true });
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
