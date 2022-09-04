import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { GlobalInputLg } from "../../components/global-inputs";
import { ButtonLg } from "../../components/global-inputs/styles";
import { useAuthUserContext } from "../../contexts/authUserContext";
import { editFormSchema } from "../../validations";
import {
  ButtonSave,
  Card,
  CardAdress,
  ContainerCenter,
  Paragragh,
  TitleCard,
  InfoCard,
} from "./styles";
import { CenteringContainer, Form, FormDiv } from "./styles";

export interface IFormEditData {
  name: string;
  birthdate: string;
  cellphone: string;
  email: string;
}

interface IRegisterData {
  email: string;
  birthdate?: string;
  name: string;
  cellphone?: string;
}

const EditProfile = () => {
  const { editUser, user, getUser } = useAuthUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEditData>({ resolver: yupResolver(editFormSchema) });

  const getItem = localStorage.getItem("@healthyGo-userid");
  function Submit(data: IRegisterData) {
    const register = {
      email: data.email,
      birthday: data.birthdate,
      name: data.name,
      cellphone: data.cellphone,
    };
    console.log(register);
    if (getItem) {
      editUser(register, getItem);
    }
  }
  if (getItem) {
    getUser(getItem);
  }
  console.log(user);
  console.log(getItem);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ContainerCenter>
        <CenteringContainer>
          <FormDiv>
            <p>Editar perfil</p>
            <Form onSubmit={handleSubmit(Submit)}>
              <GlobalInputLg
                type="text"
                label="Nome *"
                defaultValue={user?.name}
                register={register}
                registerName="name"
              />
              <Paragragh>{errors.name && errors.name.message}</Paragragh>
              <GlobalInputLg
                type="date"
                label="Data de nascimento *"
                defaultValue={user?.birthday}
                register={register}
                registerName="birthdate"
              />
              <GlobalInputLg
                type="tel"
                label="Telefone"
                defaultValue={user?.cellphone}
                register={register}
                registerName="cellphone"
              />
              <GlobalInputLg
                type="email"
                label="E-mail adicional *"
                defaultValue={user?.email}
                register={register}
                registerName="email"
              />
              <ButtonLg type="submit">Salvar</ButtonLg>
            </Form>
          </FormDiv>
        </CenteringContainer>
        <CardAdress>
          <h3>Endereços</h3>
          <Card>
            <TitleCard>Casa</TitleCard>
            <InfoCard>Rua Veneza Ferreira</InfoCard>
            <InfoCard>Numero: 260</InfoCard>
            <InfoCard>CEP 89888-000 - Itapema - SC</InfoCard>
          </Card>
          <ButtonSave>Adicionar endereço</ButtonSave>
          <img src="../../assets/adresspin.png" alt="" />
        </CardAdress>
      </ContainerCenter>
    </motion.div>
  );
};

export default EditProfile;
