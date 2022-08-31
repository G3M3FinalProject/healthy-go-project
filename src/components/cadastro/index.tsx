import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, Form } from "./styles";
//import { useContext } from "react";
//import { AuthContext, IRegister } from "../../contexts/interface";

export interface IRegister {
  name: string;
  email: string;
  password: string | number;
  confirme: string | number;
  adress: string;
  contact: string | number;
  course_module: string;
  primeiromodulo: string;
  segundomodulo: string;
  terceiromodulo: string;
  quartomodulo: string;
}

export type IRegisterUser = Omit<IRegister, "id">;

export function Cadastro() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Email inválido",
      ),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
        "Senha invalida",
      ),
    confirme: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Deve ser igual a senha"),
    contact: yup.string().required("Contato é obrigatório"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  //const { regist } = useContext(AuthContext);

  function backLogin() {
    navigate("/homepage");
  }

  return (
    <Container>
      <div>
        <h3>Cadastro</h3>

        <Form onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              id="name"
              type="text"
              //placeholder="Digite aqui seu nome"
              {...register("name")}
            ></input>
            {errors.name?.message}
          </label>
          <label>
            E-mail
            <input
              id="email"
              type="text"
              //placeholder="Digite aqui seu email"
              {...register("email")}
            ></input>
            {errors.email?.message}
          </label>
          <label>
            Senha
            <input
              id="password"
              type="password"
              //placeholder="Digite aqui sua senha"
              {...register("password")}
            ></input>
            {errors.password?.message}
          </label>
          <label>
            Confirmação de Senha
            <input
              id="confirme"
              type="text"
              //placeholder="Digite novamente sua senha"
              {...register("confirme")}
            ></input>
            {errors.confirme?.message}
          </label>
          <label>
            Endereço
            <input
              id="adress"
              type="text"
              //placeholder="Fale sobre você"
              {...register("adress")}
            ></input>
          </label>
          <label>
            Contato
            <input
              id="contact"
              type="text"
              //placeholder="Opção de contato"
              {...register("contact")}
            ></input>
            {errors.contact?.message}
          </label>
          <button type="submit" onClick={backLogin}>
            Cadastrar
          </button>
        </Form>
      </div>
    </Container>
  );
}
