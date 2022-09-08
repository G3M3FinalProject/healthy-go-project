import { useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useAuthUserContext } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { ContainerEnd, Modal } from "./style";

export const ModalCheckOut = () => {
  const { user } = useAuthUserContext();
  const { setIsSucessModalOpen } = useModalContext();
  const navigate = useNavigate();

  const modalRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function handleOutClick(event) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        setIsSucessModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);

      // Diminui o tempo até a animação voltar a funcionaar!
      setTimeout(() => {
        setIsSucessModalOpen(false);
        navigate("/home", { replace: true });
      }, 3000);
    };
  }, []);

  return (
    <ContainerEnd>
      {
        <Modal ref={modalRef}>
          <span>
            <IoIosClose
              onClick={() => {
                setIsSucessModalOpen(false);
                navigate("/home", { replace: true });
              }}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            ></IoIosClose>
          </span>
          <div className="checkmark-container">
            <svg
              x="0px"
              y="0px"
              fill="none"
              className="checkmark-svg"
              viewBox="0 0 25 30"
            >
              <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
            </svg>
          </div>
          <h2>Compra efetuada com sucesso</h2>
          <p>O comprovante será enviado ao e-mail:</p>
          <p>{user?.email}</p>
        </Modal>
      }
    </ContainerEnd>
  );
};
