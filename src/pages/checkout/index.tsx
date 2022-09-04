import AdressModal from "../../components/adress-modal";
import { FormPgto } from "../../components/checkout/checkout-pagamento";
import { ResumeCheckout } from "../../components/checkout/checkout-resume";
import { Adress } from "../../components/checkout/checkout-selecione-endereco";
import { useModalContext } from "../../contexts/modalContext";
import { ContainerMain, ContainerMidle } from "./styles";

export const CheckOut = () => {
  const { isProfileModalOpen } = useModalContext();
  return (
    <>
      <ContainerMain>
        <ContainerMidle>
          <Adress />
          <FormPgto />
        </ContainerMidle>
        <ResumeCheckout />
      </ContainerMain>
      {<AdressModal /> && isProfileModalOpen}
    </>
  );
};
