import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaCompass } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import { useAddressContext } from "../../contexts/addressContext";
import { useModalContext } from "../../contexts/modalContext";
import { GlobalButtonLg, GlobalInputLg } from "../global-inputs";
import {
  Modal,
  Container,
  Header,
  LocationDiv,
  CityState,
  Neighborhood,
} from "./styles";

const AdressModal = () => {
  const { setIsProfileModalOpen } = useModalContext();
  const { getAddress, address, clearAddress } = useAddressContext();

  const formSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(formSchema),
  });

  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleOutClick(event) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        setIsProfileModalOpen(false);
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
                setIsProfileModalOpen(false);
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
            <button onClick={() => getAddress()}>Usar localização atual</button>
          </LocationDiv>
          <form>
            <GlobalInputLg
              label="Identificação do Endereço"
              type="text"
              register={register}
              registerName="endereço"
            />
            <GlobalInputLg
              label="CEP"
              type="text"
              register={register}
              registerName="cep"
              defaultValue={cep.includes("undefined") ? "" : cep}
            />
            <CityState>
              <GlobalInputLg
                label="Estado"
                type="text"
                register={register}
                registerName="estado"
                defaultValue={address?.state}
              />
              <GlobalInputLg
                label="Cidade"
                type="text"
                register={register}
                registerName="cidade"
                defaultValue={address?.city}
              />
            </CityState>
            <GlobalInputLg
              label="Rua/Avenida"
              type="text"
              register={register}
              registerName="rua"
            />
            <Neighborhood>
              <GlobalInputLg
                label="Bairro"
                type="text"
                register={register}
                registerName="bairro"
              />
              <GlobalInputLg
                label="Número"
                type="text"
                register={register}
                registerName="numero"
              />
            </Neighborhood>
            <GlobalInputLg
              label="Complemento"
              type="text"
              register={register}
              registerName="complemento"
            />
            <GlobalButtonLg type="submit">Cadastrar</GlobalButtonLg>
          </form>
        </Container>
      </Modal>
    </motion.div>
  );
};
export default AdressModal;
