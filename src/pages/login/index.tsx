import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import Image from "../../assets/order-food.png";
import { GlobalInputLg } from "../../components/global-inputs";
import { ButtonLg } from "../../components/global-inputs/styles";
import { GoogleAuthLogin } from "../../components/google-auth-login";
import { IUserLogin, useAuthUserContext } from "../../contexts/authUserContext";
import { CenteringContainer, FormDiv, Form, Img } from "./styles";

export const Login = () => {
  const { loginUser } = useAuthUserContext();

  const formSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

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
            <GlobalInputLg
              type="text"
              label="E-mail"
              register={register}
              registerName="email"
            />
            <GlobalInputLg
              type="password"
              label="Password"
              register={register}
              registerName="password"
            />
            <ButtonLg type="submit">Acessar Conta</ButtonLg>
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
