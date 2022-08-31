import { ReactNode } from "react";
import { InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { InputLg, Button, Search } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const GlobalInputLg = ({ label }: InputProps) => {
  return (
    <InputLg>
      <input placeholder=" " />
      <label>{label}</label>
    </InputLg>
  );
};

interface IPropsButton {
  children: ReactNode;
  type: string;
}

export const GlobalButton = ({ children }: IPropsButton) => {
  return <Button>{children}</Button>;
};

export const SearchBar = () => {
  return (
    <Search>
      <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
      <input placeholder="Pesquisar por..." />
    </Search>
  );
};
