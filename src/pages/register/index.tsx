import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { GlobalInputLg } from "../../components/global-inputs";
import { ButtonLg } from "../../components/global-inputs/styles";
import { useAuthUserContext } from "../../contexts/authUserContext";
import { registerFormSchema } from "../../validations";
import { CenteringContainer, FormDiv, Form, Paragragh, Back } from "./style";
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

const UserRegister = () => {
  const { registerUser } = useAuthUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(registerFormSchema) });

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
            <Paragragh>{errors.name && errors.name.message}</Paragragh>
            <GlobalInputLg
              type="email"
              label="E-mail *"
              register={register}
              registerName="email"
            />
            <Paragragh>{errors.email && errors.email.message}</Paragragh>
            <GlobalInputLg
              type="password"
              label="Senha *"
              register={register}
              registerName="password"
            />
            <Paragragh>{errors.password && errors.password.message}</Paragragh>
            <GlobalInputLg
              type="password"
              label="Confirmação de senha *"
              register={register}
              registerName="password"
            />
            <Paragragh>
              {errors.confirmPassword && errors.confirmPassword.message}
            </Paragragh>
            <ButtonLg type="submit">CADASTRAR</ButtonLg>
          </Form>
        </FormDiv>
      </CenteringContainer>
      <Link to="/login">
        <Back>Já tem cadastro? Faça o login</Back>
      </Link>
    </motion.div>
  );
};

export default UserRegister;
