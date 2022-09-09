import { ReactNode, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { ModalContainer, ModalMain } from "./styles";

interface IModalProps {
  children: ReactNode;
}

const modalRef = useRef<HTMLHeadingElement>(null);

const Modal = ({ children }: IModalProps) => {
  return (
    <ModalContainer ref={modalRef}>
      <ModalMain>
        <button>
          <AiFillCloseCircle />
        </button>
        {children}
      </ModalMain>
    </ModalContainer>
  );
};

export default Modal;
