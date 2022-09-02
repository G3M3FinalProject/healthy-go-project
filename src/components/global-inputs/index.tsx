import { ReactNode, useEffect, useState } from "react";
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

export const GlobalInputPassword = ({
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

interface IPropsButton {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  type?: string;
}

export const GlobalButtonLg = ({ children, onClick }: IPropsButton) => {
  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRipple(true);

      setTimeout(() => setIsRipple(false), 1000);
    } else {
      setIsRipple(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRipple) setCoords({ x: -1, y: -1 });
  }, [isRipple]);

  const handleClick = (e) => {
    setCoords({
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop,
    });

    onClick && onClick(e);
  };

  return (
    <ButtonLg onClick={handleClick}>
      {isRipple ? (
        <span
          className="ripple"
          style={{
            left: coords.x + "px",
            top: coords.y + "px",
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </ButtonLg>
  );
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
