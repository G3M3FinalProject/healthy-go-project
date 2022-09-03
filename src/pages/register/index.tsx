import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { GlobalInputLg } from "../../components/global-inputs";
import { ButtonLg } from "../../components/global-inputs/styles";
import { useAuthUserContext } from "../../contexts/authUserContext";
import { registerFormSchema } from "../../validations";
import {
  CenteringContainer,
  FormDiv,
  Form,
  Paragraph,
  EffectDiv,
  Back,
} from "./styles";

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

const UserRegister = () => {
  const { registerUser } = useAuthUserContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(registerFormSchema) });

  function Submit(data: IRegisterData) {
    const register = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    console.log(register);
    registerUser(register);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <CenteringContainer>
        <FormDiv>
          <p>CADASTRO</p>
          <Form onSubmit={handleSubmit(Submit)}>
            <GlobalInputLg
              type="text"
              label="Nome *"
              register={register}
              registerName="name"
            />
            <Paragraph>{errors.name && errors.name.message}</Paragraph>
            <GlobalInputLg
              type="email"
              label="E-mail *"
              register={register}
              registerName="email"
            />
            <Paragraph>{errors.email && errors.email.message}</Paragraph>
            <GlobalInputLg
              type="password"
              label="Senha *"
              register={register}
              registerName="password"
            />
            <Paragraph>{errors.password && errors.password.message}</Paragraph>
            <GlobalInputLg
              type="password"
              label="Confirmação de senha *"
              register={register}
              registerName="confirmPassword"
            />
            <Paragraph>
              {errors.confirmPassword && errors.confirmPassword.message}
            </Paragraph>
            <ButtonLg type="submit">Cadastrar</ButtonLg>
          </Form>
        </FormDiv>
      </CenteringContainer>
      <EffectDiv onClick={() => navigate("/login", { replace: true })}>
        <Back>Já tem cadastro? Faça o login</Back>
      </EffectDiv>
    </motion.div>
  );
};

export default UserRegister;
