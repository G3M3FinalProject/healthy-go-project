import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import { GlobalButtonLg, GlobalInputLg } from "../global-inputs";
import { Modal, Container, Header, EstadoCidade, BairroNumero } from "./styles";

const AdressModal = () => {
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

  console.log(errors);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Modal>
        <Container>
          <Header>
            <p>Cadastrar Novo Endereço</p>
            <div>
              <IoIosClose
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
            </div>
          </Header>
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
            />
            <EstadoCidade>
              <GlobalInputLg
                label="Estado"
                type="text"
                register={register}
                registerName="estado"
              />
              <GlobalInputLg
                label="Cidade"
                type="text"
                register={register}
                registerName="cidade"
              />
            </EstadoCidade>
            <GlobalInputLg
              label="Rua/Avenida"
              type="text"
              register={register}
              registerName="rua"
            />
            <BairroNumero>
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
            </BairroNumero>
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
