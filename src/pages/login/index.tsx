import { FormLogin } from "../../components/form-login";
import { GoogleAuthLogin } from "../../components/google-auth-login";

export const Login = () => {
  return (
    <div>
      <FormLogin />
      <GoogleAuthLogin />
    </div>
  );
};

export {};
