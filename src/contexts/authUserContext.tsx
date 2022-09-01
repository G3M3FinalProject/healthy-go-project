import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services";

interface IAuthUserProviderData {
  user: IUser | undefined;
  loginUser: (user: IUserLogin) => void;
  registerUser: (user: IUser) => void;
  isLoading: boolean;
  editUser: (data: IUser, id: string) => void;
  getUser: (id: string) => void;
}

export interface IUserLogin {
  email?: string;
  password?: string;
}
interface IUserResponse {
  data: {
    accessToken: string;
    user: IUserEdit;
  };
}

interface IUserEdit {
  name: string;
  birthday?: string;
  cellphone?: string;
  email2?: string;
  id: string;
  email: string;
}

export interface IUser extends IUserLogin {
  type?: string;
  avatar?: string;
  name: string;
  birthday?: string;
  cellphone?: string;
  email2?: string;
  id?: string;
}

interface IUserRes extends IUser {
  id: string;
}

interface IUserEditRes {
  data: IUser;
}

interface IAuthUserProps {
  children: ReactNode;
}

const AuthUserContext = createContext({} as IAuthUserProviderData);

export const AuthUserProvider = ({ children }: IAuthUserProps) => {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = (data: IUserLogin) => {
    api
      .post("/login", data)
      .then((res: IUserResponse) => {
        setUser(res.data.user);
        localStorage.setItem("@healthyGo-userid", res.data.user.id);
        localStorage.setItem("@healthyGo-token", res.data.accessToken);

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;

        setIsLoading(false);
        navigate("/homepage", { replace: true });
      })
      .catch((err) =>
        //Adicionar algum aviso ao usuário informando que a senha dele está incorreta!
        console.log(err),
      );
  };

  const registerUser = (data: IUser) => {
    api
      .post("/register", data)
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const isUserLoggedIn = () => {
    useEffect(() => {
      const token = localStorage.getItem("@healthyGo-token");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (token)
        api
          .get("/login")
          .then()
          .catch(() => {
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

  return (
    <AuthUserContext.Provider
      value={{ user, loginUser, registerUser, isLoading, editUser, getUser }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUserContext = () => useContext(AuthUserContext);
