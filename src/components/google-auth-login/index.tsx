import { GoogleLogin } from "@react-oauth/google";
import jwt_decode, { JwtPayload } from "jwt-decode";

import { IUser, useAuthUserContext } from "../../contexts/authUserContext";

interface IUserInfoGmail {
  email: string;
  sub: string;
  name: string;
  picture: string;
}

export const GoogleAuthLogin = () => {
  const { loginUser, registerUser, setUser } = useAuthUserContext();

  const responseGmail = (userInfo: IUserInfoGmail) => {
    // Verificar Registro ... => Está registrado?
    const userInfoFixed: IUser = {
      email: userInfo.email,
      password: userInfo.sub,
      avatar: userInfo.picture,
      name: userInfo.name,
      type: "",
    };
    setUser(userInfoFixed);
    registerUser(userInfoFixed);
    loginUser(userInfoFixed);
  };

  return (
    <GoogleLogin
      onSuccess={(userInfoJWT) => {
        if (userInfoJWT?.credential) {
          const userInfo = jwt_decode<JwtPayload>(userInfoJWT?.credential);
          responseGmail(userInfo as IUserInfoGmail);
        }
      }}
    ></GoogleLogin>
  );
};
