import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services";
import { useAuthUserContext } from "../../contexts/authUserContext";

const navigate = useNavigate();

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome é um campo necessário"),
  email: yup
    .string()
    .required("E-mail é um campo necessário")
    .email("Precisa ser uum e-mail válido"),
  password: yup
    .string()
    .required("Senha é um campo necessário")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Minimo de 8 caracteres, ao menos 1 (A-Z) letra maiúscula, 1 (a-z) minúscula , 1 (1-9) número e 1 (%-#-@) caracter especial",
    ),
  confirmPassword: yup
    .string()
    .required("A confirmação da senha é necessária")
    .oneOf([yup.ref("password")], "As senhas não estão iguais"),
});

function Submit(data: IRegisterData) {
  const cadastrar = {
    email: data.email,
    password: data.password,
    name: data.name,
  };
  api
    .post("/register", cadastrar)
    .then((response) => {
      navigate(`/login`);
    })
    .catch((err) => console.log(err));
}

interface IRegisterData {
  email: string;
  password: string;
  name: string;
}

type UserContextType = {
  registerFunction: (data: IRegisterData) => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);
export interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const UserRegister = () => {
  const { registerUser } = useAuthUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(registerFormSchema) });

  return (
   
  );
};

export default UserRegister;
