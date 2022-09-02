import { ContainerEnd } from "./style";

export interface ICheckOut {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCheckOut = ({ modal, setModal }: ICheckOut) => {
  return (
    <ContainerEnd>
      {
        <div>
          <span>
            <button onClick={() => setModal(false)}>X</button>
          </span>
          <h2>Compra efetuada com sucesso</h2>
          <p>O comprovante será enviado ao e-mail:</p>
          <p>teste@email.com</p>
        </div>
      }
    </ContainerEnd>
  );
};
