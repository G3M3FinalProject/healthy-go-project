import { useState } from "react";

import transation from "../../../assets/transation.png";
import { ModalCheckOut } from "../../modalcheckout";
import { ContainerResume, DivImgCheck, DivTT } from "./style";

export interface ICheckOut {
  modalResume: boolean;
  setModalResume: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResumeCheckout() {
  const [modalResume, setModalResume] = useState(false);
  //   console.log(modalResume);

  return (
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
      <button onClick={() => setModalResume(true)}>Finalizar Pedido</button>
      {/* <ModalCheckOut
        modalResume={modalResume}
        setModalResume={setModalResume}
      /> */}
    </ContainerResume>
  );
}
