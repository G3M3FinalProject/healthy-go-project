import { ReactNode } from "react";
import { InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { FormGroupStyled, Button, Search } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const GlobalInput = ({ label }: InputProps) => {
  return (
    <FormGroupStyled>
      <input placeholder=" " />
      <label>{label}</label>
    </FormGroupStyled>
  );
};

interface IPropsButton {
  children: ReactNode;
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
