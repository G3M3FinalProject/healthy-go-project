import {
  useState,
  useEffect,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services";

interface IAuthUserProviderData {
  isLoading: boolean;
  user: IUser | undefined;
  getUser: (id: string) => void;
  registerUser: (user: IUser) => void;
  loginUser: (user: IUserLogin) => void;
  editUser: (data: IUser, id: string) => void;
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

export interface IUser extends IUserLogin {
  id?: string;
  name: string;
  type?: string;
  avatar?: string;
  email2?: string;
  birthday?: string;
  cellphone?: string;
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
        localStorage.setItem("@healthyGo-userId", res.data.user.id);
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
      const id = localStorage.getItem("@healthyGo-userId");
      const token = localStorage.getItem("@healthyGo-token");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (token)
        api
          .get(`/users/${id}`)
          .then((res) => {
            setUser(res.data);
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

  return (
    <AuthUserContext.Provider
      value={{ user, loginUser, registerUser, isLoading, editUser, getUser }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUserContext = () => useContext(AuthUserContext);
