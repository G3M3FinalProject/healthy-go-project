import { ReactNode } from "react";
import { InputHTMLAttributes } from "react";

import { Input, Button } from "./styles";

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
