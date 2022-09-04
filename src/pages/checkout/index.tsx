import { FormPgto } from "../../components/checkout/checkout-pagamento";
import { ResumeCheckout } from "../../components/checkout/checkout-resume";
import { Adress } from "../../components/checkout/checkout-selecione-endereco";
import { ContainerMain, ContainerMidle } from "./styles";

export const CheckOut = () => {
  return (
    <ContainerMain>
      <ContainerMidle>
        <Adress />
        <FormPgto />
      </ContainerMidle>
      <ResumeCheckout />
    </ContainerMain>
  );
};