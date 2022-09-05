import AdressModal from "../../components/adress-modal";
import CheckoutForm from "../../components/checkout/checkout-form";
import { ResumeCheckout } from "../../components/checkout/checkout-resume";
import Loading from "../../components/loading";
import { ModalCheckOut } from "../../components/modalcheckout";
import { useAuthUserContext } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { ContainerMain, ContainerMidle } from "./styles";

export const CheckOut = () => {
  const { isAddressModalOpen, isSuccessModalOpen } = useModalContext();
  const { isLoading } = useAuthUserContext();
  
  if (isLoading) return <Loading />;

  return (
    <>
      <ContainerMain>
        <ContainerMidle>
          <CheckoutForm />
        </ContainerMidle>
        <ResumeCheckout />
      </ContainerMain>
      {isAddressModalOpen && <AdressModal />}
      {isSuccessModalOpen && <ModalCheckOut />}
    </>
  );
};
