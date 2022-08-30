import { FacebookAuthLogin } from "../../components/facebookAuthLogin";
import { FormLogin } from "../../components/formLogin";
import { GoogleAuthLogin } from "../../components/googleAuthLogin";

export const Login = () => {
  return (
    <div>
      <FormLogin />
      {/* <GoogleAuthLogin />
      <FacebookAuthLogin /> */}
    </div>
  );
};

export {};
