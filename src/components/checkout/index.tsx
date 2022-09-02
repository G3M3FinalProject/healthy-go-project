import { FormPgto } from "./checkout-pagamento";
import { ResumeCheckout } from "./checkout-resume";
import { Adress } from "./checkout-selecione-endereco";
import { ContainerMain, ContainerMidle } from "./style";

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
