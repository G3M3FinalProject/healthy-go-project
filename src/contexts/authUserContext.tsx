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
}

export interface IUserLogin {
  email: string;
  password: string;
}
interface IUserResponse {
  data: {
    accessToken: string;
    user: IUserRes;
  };
}

export interface IUser extends IUserLogin {
  type: string;
  avatar: string;
  name: string;
}

interface IUserRes extends IUser {
  id: string;
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
        localStorage.setItem("@healthyGo-token", res.data.accessToken);
        localStorage.setItem("@healthyGo-userId", res.data.user.id);

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
      const id = localStorage.getItem("@healthyGo-userId");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (token)
        api
          .get(`/users/${id}`)
          .then((res) => {
            setUser(res.data);
          })
          .catch(() => {
            localStorage.clear();
          })
          .finally(() => {
            setIsLoading(false);
          });
    }, []);
  };
  isUserLoggedIn();

  return (
    <AuthUserContext.Provider
      value={{ user, loginUser, registerUser, isLoading }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUserContext = () => useContext(AuthUserContext);
