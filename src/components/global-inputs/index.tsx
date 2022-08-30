import { ReactNode } from "react";
import { InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Input, Button, Search } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const GlobalInput = ({ placeholder }: InputProps) => {
  return <Input placeholder={placeholder} />;
};

interface IPropsButton {
  children: ReactNode;
}

export const GlobalButton = ({ children }: IPropsButton) => {
  return <Button>{children}</Button>;
};

export const SeachBar = () => {
  return (
    <Search>
      <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
      <input placeholder="Pesquisar por..." />
    </Search>
  );
};
