import {
  useState,
  useEffect,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { api } from "../services";
import { ICompleteAddress } from "./addressContext";
import { IProduct } from "./restaurantProductsContext";

interface IAuthUserProviderData {
  isLoading: boolean;
  user: IUser | undefined;
  getUser: (id: string) => void;
  registerUser: (user: IUser) => void;
  loginUser: (user: IUserLogin) => void;
  editUser: (data: IUser, id: string) => void;
  logoutUser: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export interface IUserLogin {
  email?: string;
  password?: string;
}
interface IUserResponse {
  data: {
    user: IUserEdit;
    accessToken: string;
  };
}

interface IUserEdit {
  id: string;
  name: string;
  email: string;
  email2?: string;
  birthday?: string;
  cellphone?: string;
}
export interface IUserRequests {
  id: number;
  status: string;
  date: string;
  payament: string;
  total: number;
}

export interface IUser extends IUserLogin {
  id?: string;
  name: string;
  type?: string;
  avatar?: string;
  email2?: string;
  birthday?: string;
  cellphone?: string;
  address?: ICompleteAddress[];
  requests?: IUserRequests[];
  cart?: IProduct[];
}
export interface IUserEditRes {
  data: IUser;
}

interface IAuthUserProps {
  children: ReactNode;
}

const AuthUserContext = createContext({} as IAuthUserProviderData);

export const AuthUserProvider = ({ children }: IAuthUserProps) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const initialUser = JSON.parse(localStorage.getItem("@healthyGo-user")!);
  const [user, setUser] = useState(initialUser as IUser);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const actualPage = useLocation().pathname;

  const loginUser = (data: IUserLogin) => {
    api
      .post("/login", data)
      .then((res: IUserResponse) => {
        setUser(res.data.user);
        const userLocalStorage = JSON.stringify(res.data.user);
        localStorage.setItem("@healthyGo-userId", res.data.user.id);
        localStorage.setItem("@healthyGo-user", userLocalStorage);

        localStorage.setItem("@healthyGo-token", res.data.accessToken);

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;

        setIsLoading(false);
        navigate("/homepage", { replace: true });
      })
      .catch(
        (err) => {
          console.log("teste");
          console.log(err);
        },
        //Adicionar algum aviso ao usuário informando que a senha dele está incorreta!
      );
  };

  const registerUser = (data: IUser) => {
    api
      .post("/register", data)
      .then(() => {
        actualPage === "/login"
          ? loginUser(user as IUser)
          : navigate("/login", { replace: true });
      })
      .catch((err) => {
        loginUser(user as IUser);
        console.log(err);
        console.log("teste");
      });
  };

  const isUserLoggedIn = () => {
    useEffect(() => {
      const id = localStorage.getItem("@healthyGo-userId");
      const token = localStorage.getItem("@healthyGo-token");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (token)
        api
          .get(`/users/${id}`)
          .then((res) => {
            setUser(res.data);
            console.log(res.data);
          })
          .catch(() => {
            localStorage.clear();

            setIsLoading(false);
          })
          .finally(() => {
            setIsLoading(false);
          });
    }, []);
  };
  isUserLoggedIn();

  const editUser = (data: IUser, id: string) => {
    api
      .patch(`/users/${id}`, data)
      .then((res: IUserEditRes) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getUser = (id: string) => {
    useEffect(() => {
      api
        .get(`/users/${id}`)
        .then((res: IUserEditRes) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  };

  const logoutUser = () => {
    setUser({} as IUser);
    localStorage.clear();
  };

  return (
    <AuthUserContext.Provider
      value={{
        user,
        loginUser,
        registerUser,
        isLoading,
        editUser,
        getUser,
        logoutUser,
        setUser,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUserContext = () => useContext(AuthUserContext);
