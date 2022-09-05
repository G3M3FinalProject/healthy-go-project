import { useState } from "react";

import { v4 as uuid } from "uuid";

import transation from "../../../assets/transation.png";
import { useCart } from "../../../contexts/cartContext";
import { ModalCheckOut } from "../../modalcheckout";
import {
  ContainerResume,
  DivImgCheck,
  DivTT,
  SummaryRestaurant,
} from "./style";

export interface ICheckOut {
  modalResume: boolean;
  setModalResume: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResumeCheckout() {
  const { summaryCart, subTotalCart, totalCart, freightCart } = useCart();

  const [modalResume, setModalResume] = useState(false);
  //   console.log(modalResume);

  console.log(summaryCart);
  return (
    <ContainerResume>
      <h3>Resumo</h3>
      <div>
        <p>Descrição</p>
        <p>Valor</p>
      </div>
      {summaryCart?.map((product) => {
        return (
          <SummaryRestaurant key={product.restaurant}>
            <img src={product.logo} alt={product.restaurant} />
            <h4>{product.restaurant}</h4>
            <p>{product.amount}</p>
            <p>R$ {product.price.toFixed(2)}</p>
          </SummaryRestaurant>
        );
      })}
      <span>
        <p>Subtotal</p>
        <p>R$ {subTotalCart.toFixed(2)}</p>
      </span>
      <span>
        <p>Frete</p>
        <p>R$ {freightCart.toFixed(2)}</p>
      </span>
      <DivImgCheck>
        <img src={transation} />
      </DivImgCheck>
      <DivTT>
        <p>Total</p>
        <p>R$ {totalCart.toFixed(2)}</p>
      </DivTT>
      <button onClick={() => setModalResume(true)}>Finalizar Pedido</button>
      {/* <ModalCheckOut
        modalResume={modalResume}
        setModalResume={setModalResume}
      /> */}
    </ContainerResume>
  );
}
