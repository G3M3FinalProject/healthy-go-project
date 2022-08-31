import { ReactNode, useState } from "react";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHide, BiShow } from "react-icons/bi";

import { InputLg, ButtonLg, ButtonMd, Search } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  errors?: string;
  registerName: string;
  defaultValue?: string;
  isPasswordWrong?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

interface IPropsButton {
  type: string;
  children: ReactNode;
}

export const GlobalInputLg = ({
  type,
  label,
  register,
  registerName,
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

export const GlobalInputPassword = ({
  label,
  register,
  registerName,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputLg>
      <input
        type={showPassword ? "text" : "password"}
        placeholder=" "
        {...register(registerName)}
      />
      <label htmlFor="password">{label}</label>
      <button
        type="button"
        className="password__show"
        onClick={() => setShowPassword((old) => !old)}
      >
        <div>{showPassword ? <BiShow /> : <BiHide />}</div>
      </button>
    </InputLg>
  );
};

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
