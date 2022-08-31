import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import Image from "../../assets/order-food.png";
import { GoogleAuthLogin } from "../../components/google-auth-login";
import { IUserLogin, useAuthUserContext } from "../../contexts/authUserContext";
import {
  CenteringContainer,
  FormDiv,
  Form,
  Img,
  Input,
  Button,
} from "./styles";

export const Login = () => {
  const { loginUser } = useAuthUserContext();

  const formSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });
  const { register, handleSubmit } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <CenteringContainer>
        <Img src={Image} alt="Woman ordering" />
        <FormDiv>
          <p>Já tenho cadastro</p>
          <Form onSubmit={handleSubmit(loginUser)}>
            <Input type="email" placeholder="E-mail" {...register("email")} />
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <Button type="submit">Acessar Conta</Button>
            <p>Não tem conta cadastro? Faça aqui!</p>
            <p>Ou entre com:</p>
            <GoogleAuthLogin />
          </Form>
        </FormDiv>
      </CenteringContainer>
    </motion.div>
  );
};

export default Login;
