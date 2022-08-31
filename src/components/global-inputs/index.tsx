import { ReactNode } from "react";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

import { InputLg, ButtonLg, ButtonMd, Search } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string;
  registerName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type: string;
  defaultValue?: string;
}

export const GlobalInputLg = ({
  label,
  registerName,
  register,
  type,
  defaultValue,
}: InputProps) => {
  return (
    <InputLg>
      <input
        type={type}
        {...register(registerName)}
        placeholder=" "
        defaultValue={defaultValue}
      />
      <label>{label}</label>
    </InputLg>
  );
};

interface IPropsButton {
  children: ReactNode;
  type: string;
}

export const GlobalButtonLg = ({ children }: IPropsButton) => {
  return <ButtonLg>{children}</ButtonLg>;
};

export const GlobalButtonMd = ({ children }: IPropsButton) => {
  return <ButtonMd>{children}</ButtonMd>;
};

export const SearchBar = () => {
  return (
    <Search>
      <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
      <input placeholder="Pesquisar por..." />
    </Search>
  );
};
