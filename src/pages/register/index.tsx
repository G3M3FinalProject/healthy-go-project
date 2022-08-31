import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAuthUserContext } from "../../contexts/authUserContext";
import { api } from "../../services";
import { registerFormSchema } from "../../validations";

const navigate = useNavigate();

type UserContextType = {
  registerFunction: (data: IRegisterData) => void;
};
interface IRegisterData {
  email: string;
  password: string;
  name: string;
}
export interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Submit(data: IRegisterData) {
  const register = {
    email: data.email,
    password: data.password,
    name: data.name,
  };
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

const UserRegister = () => {
  const { registerUser } = useAuthUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(registerFormSchema) });

  return <h1>Teste</h1>;
};

export default UserRegister;
