import { FormLogin } from "../../components/formLogin";
import { GoogleAuthLogin } from "../../components/googleAuthLogin";

export const Login = () => {
  return (
    <div>
      <FormLogin />
      <GoogleAuthLogin />
    </div>
  );
};

export {};
