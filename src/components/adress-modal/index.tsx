import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCompass } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import {
  ICompleteAddress,
  useAddressContext,
} from "../../contexts/addressContext";
import { useModalContext } from "../../contexts/modalContext";
import { registerAdressFormSchema } from "../../validations";
import { GlobalButtonLg, GlobalInputLg } from "../global-inputs";
import {
  Modal,
  Container,
  Header,
  StateCity,
  Neighbourhood,
  LocationDiv,
} from "./styles";

const AdressModal = () => {
  const { setIsAddressModalOpen } = useModalContext();
  const { getAddress, clearAddress, registerNewAdressUser } =
    useAddressContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICompleteAddress>({
    resolver: yupResolver(registerAdressFormSchema),
  });

  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleOutClick(event) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        setIsAddressModalOpen(false);
        clearAddress();
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);
  // defaultValue={`${address?.postal}-000`}
  const onSuccess = (data: ICompleteAddress) => {
    console.log(data);
    registerNewAdressUser(data);
  };
  console.log(errors);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Modal>
        <Container ref={modalRef}>
          <Header>
            <p>Cadastrar Novo Endereço</p>
            <button
              onClick={() => {
                setIsAddressModalOpen(false);
                clearAddress();
              }}
            >
              <IoIosClose
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
            </button>
          </Header>
          <LocationDiv>
            <FaCompass />
            <button
              onClick={() => {
                getAddress(setValue);
              }}
            >
              Usar localização atual
            </button>
          </LocationDiv>
          <form onSubmit={handleSubmit(onSuccess)}>
            <GlobalInputLg
              label="Identificação do Endereço"
              type="text"
              register={register}
              registerName="adressIdentification"
              errors={errors?.adressIdentification?.message}
            />
            <GlobalInputLg
              label="CEP"
              type="text"
              register={register}
              registerName="postal"
              errors={errors?.postal?.message}
            />

            <StateCity>
              <GlobalInputLg
                label="Estado"
                type="text"
                register={register}
                registerName="state"
                errors={errors?.state?.message}
              />
              <GlobalInputLg
                label="Cidade"
                type="text"
                register={register}
                registerName="city"
                errors={errors?.city?.message}
              />
            </StateCity>
            <GlobalInputLg
              label="Rua/Avenida"
              type="text"
              register={register}
              registerName="street"
              errors={errors?.street?.message}
            />
            <Neighbourhood>
              <GlobalInputLg
                label="Bairro"
                type="text"
                register={register}
                registerName="district"
                errors={errors?.district?.message}
              />
              <GlobalInputLg
                label="Número"
                type="number"
                register={register}
                registerName="number"
                errors={errors?.number?.message}
              />
            </Neighbourhood>
            <GlobalInputLg
              label="Complemento"
              type="text"
              register={register}
              registerName="complement"
            />
            <GlobalButtonLg type="submit">Cadastrar</GlobalButtonLg>
          </form>
        </Container>
      </Modal>
    </motion.div>
  );
};
export default AdressModal;
