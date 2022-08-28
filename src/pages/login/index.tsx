import { ContainerApp, Form, Section } from "./style";
import orderLogin from "../../assets/orderLogin.gif"
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
//import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import { AuthContext, IUser } from "../../contexts/interface";
import { useNavigate } from "react-router-dom";


export interface IUser {
    id: string;
    email: string;
    password: string | number;
    name: string;
    
  }

export interface ILogin {
  setUser: (value: IUser | ((previousValue: IUser) => IUser[])) => void;
}

export type IUserLogin = Omit<IUser, "id">;

export function Login() {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("Email obrigatório"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  //const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  function goRegister() {
    navigate("/register");
  }

  return (
    <ContainerApp>
      {/* <img src={logo} alt="logo" /> */}
      <img src={orderLogin} alt="Login" />
      <Form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <input
            id="email"
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          ></input>
          {errors.email?.message}
       <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          ></input>
          {errors.password?.message}
  
        <button type="submit">Login</button>
        <Section>
        <p>Ainda não possui uma conta?</p>
        <button type="button" onClick={goRegister}>
          <img src={facebook} alt={'Cadastro com Facebook'}/>
        </button>
        <button type="button" onClick={goRegister}>
          <img src={google} alt={'Cadastro com Google'}/>
        </button>
      </Section>
      </Form>
      
    </ContainerApp>
  );
}



