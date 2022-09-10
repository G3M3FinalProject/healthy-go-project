import transation from "../../../assets/transation.png";
import { useCart } from "../../../contexts/cartContext";
import { GlobalButtonLg } from "../../global-inputs";
import {
  ContainerResume,
  DivImgCheck,
  DivTT,
  SummaryRestaurant,
  TableHeader,
} from "./style";

export interface ICheckOut {
  modalResume: boolean;
  setModalResume: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResumeCheckout() {
  const { summaryCart, subTotalCart, totalCart, freightCart } = useCart();
  const hasDiscount = subTotalCart - 80 >= 0;

  return (
    <ContainerResume>
      <h3>Resumo</h3>
      <TableHeader>
        <p></p>
        <p>Descrição</p>

        <p>Valor</p>
      </TableHeader>
      {summaryCart?.map((product) => {
        return (
          <SummaryRestaurant key={product.restaurant}>
            <img src={product.logo} alt={product.restaurant} />
            <h4>{product.restaurant}</h4>

            <p className="price">R$ {product.price.toFixed(2)}</p>
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
      {hasDiscount && (
        <span>
          <p>Desconto</p>
          <p>R$ {((subTotalCart + freightCart) * 0.1).toFixed(2)}</p>
        </span>
      )}
      <DivImgCheck>
        <img src={transation} />
      </DivImgCheck>
      <DivTT>
        <p>Total</p>
        <p>R$ {totalCart.toFixed(2)}</p>
      </DivTT>

      <GlobalButtonLg type="submit" form="payamentForm">
        Finalizar Pedido
      </GlobalButtonLg>
    </ContainerResume>
  );
}
