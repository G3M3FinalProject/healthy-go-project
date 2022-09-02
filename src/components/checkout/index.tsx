import { useState } from "react";
import { useForm } from "react-hook-form";

import locationon from "../../assets/locationon.svg";
import transation from "../../assets/transation.png";
import { GlobalInputLg } from "../global-inputs";
import { ModalCheckOut } from "../modalcheckout";
import {
  ContainerAdress,
  ContainerMain,
  ContainerMidle,
  ContainerResume,
  DivAdress,
  DivForm,
  DivImgCheck,
  DivPicture,
  DivTT,
  DivCredCard,
  DivDateCard,
} from "./style";

export const CheckOut = () => {
  const [modal, setModal] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <ContainerMain>
      <ContainerMidle>
        <ContainerAdress>
          <div>
            <h2>Selecione seu endereço</h2>
            <button>+ Adicionar Endereço</button>
          </div>
          <DivAdress>
            <h4>Casa</h4>
            <DivPicture>
              <p>
                <img src={locationon} />
                endereço residencial
              </p>
            </DivPicture>
          </DivAdress>
        </ContainerAdress>
        <DivForm>
          <form>
            <h2>Forma de Pagamento</h2>
            <div>
              <label>
                Cartão de Crédito
                <input id="credito" name="base" type="radio" value="S" />
              </label>
              <label>
                Cartão de débito
                <input id="debito" name="base" type="radio" value="S" />
              </label>
              <label>
                Pix
                <input id="pix" name="base" type="radio" value="S" />
              </label>
            </div>
            <DivCredCard>
              <div>
                <GlobalInputLg
                  type="text"
                  label="Número do Cartão"
                  register={register}
                  registerName="cartaonumero"
                />
                <GlobalInputLg
                  type="text"
                  label="Nome do Títular"
                  register={register}
                  registerName="nomeTitular"
                />
                <select name="select">
                  <option value="A vista">À vista - Até 10% de Desconto</option>
                  <option value="2 sem juros">2 x Sem Juros</option>
                  <option value="3 sem juros">3 x Sem Juros</option>
                  <option value="4 sem juros">4 x Sem Juros</option>
                </select>
              </div>
              <DivDateCard>
                <GlobalInputLg
                  type="text"
                  label="Validade"
                  register={register}
                  registerName="validade"
                />
                <GlobalInputLg
                  type="text"
                  label="CVV"
                  register={register}
                  registerName="cvv"
                />
              </DivDateCard>
            </DivCredCard>
          </form>
        </DivForm>
      </ContainerMidle>
      <ContainerResume>
        <h4>Resumo</h4>
        <div>
          <p>Descrição</p>
          <p>Valor</p>
        </div>
        <div>Restaurante</div>
        <span>
          <p>Subtotal</p>
          <p>R$00,00</p>
        </span>
        <span>
          <p>Frete</p>
          <p>R$00,00</p>
        </span>
        <DivImgCheck>
          <img src={transation} />
        </DivImgCheck>
        <DivTT>
          <p>Total</p>
          <p>R$00,00</p>
        </DivTT>
        <button onClick={() => setModal(true)}>Finalizar Pedido</button>
      </ContainerResume>
      {/* <ModalCheckOut modal={modal} setModal={setModal} /> */}
    </ContainerMain>
  );
};
