import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
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
import { Modal, Container, Header, EstadoCidade, BairroNumero } from "./styles";

const AdressModal = () => {
  const { setIsAddressModalOpen } = useModalContext();
  const { getAddress, address, clearAddress, registerNewAdressUser } =
    useAddressContext();

  const {
    register,
    handleSubmit,
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
  const cep = `${address?.postal}-000`;

  const onSuccess = (data: ICompleteAddress) => {
    console.log(data);
    registerNewAdressUser(data);
  };

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
          <div>
            <button onClick={() => getAddress()}>Usar localização atual</button>
          </div>
          <form onSubmit={handleSubmit(onSuccess)}>
            <GlobalInputLg
              label="Identificação do Endereço"
              type="text"
              register={register}
              registerName="adressIdentification"
            />
            <GlobalInputLg
              label="CEP"
              type="text"
              register={register}
              registerName="postal"
              defaultValue={cep.includes("undefined") ? "" : cep}
            />
            <EstadoCidade>
              <GlobalInputLg
                label="Estado"
                type="text"
                register={register}
                registerName="state"
                defaultValue={address?.state}
              />
              <GlobalInputLg
                label="Cidade"
                type="text"
                register={register}
                registerName="city"
                defaultValue={address?.city}
              />
            </EstadoCidade>
            <GlobalInputLg
              label="Rua/Avenida"
              type="text"
              register={register}
              registerName="street"
            />
            <BairroNumero>
              <GlobalInputLg
                label="Bairro"
                type="text"
                register={register}
                registerName="district"
              />
              <GlobalInputLg
                label="Número"
                type="text"
                register={register}
                registerName="number"
              />
            </BairroNumero>
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
