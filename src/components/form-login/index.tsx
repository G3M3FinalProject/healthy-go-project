import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IUserLogin, useAuthUserContext } from "../../contexts/authUserContext";

export const FormLogin = () => {
  const { loginUser } = useAuthUserContext();

  const formSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });
  const { register, handleSubmit } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });
  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <input type="email" placeholder="email" {...register("email")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
