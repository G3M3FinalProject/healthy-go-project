import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { BsFacebook } from "react-icons/bs";

import { IUser, useAuthUserContext } from "../../contexts/authUserContext";
interface IUserInfoFacebook {
  email: string;
  userID: string;
  name: string;
  picture: {
    data: {
      url: string;
    };
  };
}
export const FacebookAuthLogin = () => {
  const { loginUser, registerUser } = useAuthUserContext();
  const [loginFb, setLoginFb] = useState(false);

  const responseFacebook = (userInfo: any | IUserInfoFacebook) => {
    if (userInfo) {
      const userInfoFixed: IUser = {
        email: userInfo.email,
        password: userInfo.userID,
        avatar: userInfo.picture.data.url,
        name: userInfo.name,
        type: "",
      };
      console.log(userInfo);
      setLoginFb(true);
      registerUser(userInfoFixed);
      loginUser(userInfoFixed);
    }
  };

  const response = () => {
    return;
  };
  return (
    <>
      {!loginFb && (
        <FacebookLogin
          appId="766993627962189"
          autoLoad={false}
          fields="name,email,picture"
          onClick={response}
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon={<BsFacebook />}
        />
      )}
    </>
  );
};
