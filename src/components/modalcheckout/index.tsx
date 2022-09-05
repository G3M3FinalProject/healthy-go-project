import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthUserContext } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { ContainerEnd } from "./style";

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

    navigate("/home", { replace: true });
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <ContainerEnd>
      {
        <div ref={modalRef}>
          <span>
            <button
              onClick={() => {
                setIsSucessModalOpen(false);
                navigate("/home", { replace: true });
              }}
            >
              X
            </button>
          </span>
          <h2>Compra efetuada com sucesso</h2>
          <p>O comprovante será enviado ao e-mail:</p>
          <p>{user?.email}</p>
        </div>
      }
    </ContainerEnd>
  );
};
