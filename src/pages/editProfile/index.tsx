import { useForm } from "react-hook-form";
import { GoLocation } from "react-icons/go";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import AdressModal from "../../components/adress-modal";
import {
  GlobalButtonLg,
  GlobalInputLg,
  GlobalInputMask,
} from "../../components/global-inputs";
import { useAuthUserContext } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { editFormSchema } from "../../validations";
import {
  Card,
  CardAdress,
  ContainerCenter,
  Paragragh,
  TitleCard,
  InfoCard,
  RightDiv,
  DivButton,
  DivAdress,
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
  const { setIsAddressModalOpen, isAddressModalOpen } = useModalContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormEditData>({ resolver: yupResolver(editFormSchema) });

  const getItem = localStorage.getItem("@healthyGo-userId");
  function Submit(data: IRegisterData) {
    const register = {
      email: data.email,
      birthday: data.birthdate,
      name: data.name,
      cellphone: data.cellphone,
    };
    console.log(getItem);
    if (getItem) {
      editUser(register, getItem);
    }
  }

  if (getItem) {
    getUser(getItem);
  }
  console.log(errors);
  return (
    <>
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
                <GlobalInputMask
                  label="Telefone"
                  registerName="cellphone"
                  control={control}
                  defaultValue={user?.cellphone}
                  mask="(99) 99999-9999"
                />

                <GlobalInputLg
                  type="email"
                  label="E-mail adicional *"
                  defaultValue={user?.email}
                  register={register}
                  registerName="email"
                />
                <DivButton>
                  <GlobalButtonLg type="submit">Salvar</GlobalButtonLg>
                </DivButton>
              </Form>
            </FormDiv>
          </CenteringContainer>
          <RightDiv>
            <DivAdress>
              <GoLocation /> <h3> Endereços</h3>
            </DivAdress>

            <CardAdress>
              {user?.address?.map((address) => {
                return (
                  <Card key={address.id}>
                    <TitleCard>{address.adressIdentification}</TitleCard>
                    <InfoCard>{address.street}</InfoCard>
                    <InfoCard>Numero: {address.number}</InfoCard>
                    <InfoCard>
                      CEP {address.postal} - {address.city} - {address.state}
                    </InfoCard>
                  </Card>
                );
              })}
            </CardAdress>
            <GlobalButtonLg onClick={() => setIsAddressModalOpen(true)}>
              Adicionar endereço
            </GlobalButtonLg>
          </RightDiv>
        </ContainerCenter>
      </motion.div>
      {isAddressModalOpen && <AdressModal />}
    </>
  );
};

export default EditProfile;
