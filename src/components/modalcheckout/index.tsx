import { useAuthUserContext } from "../../contexts/authUserContext";
import { ICheckOut } from "../checkout/checkout-resume";
import { ContainerEnd } from "./style";

export const ModalCheckOut = ({ setModalResume }: ICheckOut) => {
  const { user } = useAuthUserContext();
  return (
    <ContainerEnd>
      {
        <div>
          <span>
            <button onClick={() => setModalResume(false)}>X</button>
          </span>
          <h2>Compra efetuada com sucesso</h2>
          <p>O comprovante será enviado ao e-mail:</p>
          <p>{user?.email}</p>
        </div>
      }
    </ContainerEnd>
  );
};
