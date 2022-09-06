import { useEffect, useState } from "react";
import { InputHTMLAttributes } from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineWarning } from "react-icons/ai";
import InputMask from "react-input-mask";

import { InputLg, ButtonLg, ButtonMd, Search } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string;
  registerName: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type: string;
  defaultValue?: string;
  maxLength?: number;
}

interface IInputMask {
  label: string;
  registerName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  mask: string | (string | RegExp)[];
  errors?: string;
  defaultValue?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

export const GlobalInputLg = ({
  label,
  registerName,
  register,
  type,
  defaultValue,
  errors,
}: InputProps) => {
  return (
    <InputLg error={errors}>
      <input
        type={type}
        {...register(registerName)}
        placeholder=" "
        defaultValue={defaultValue}
      />
      <label>{label}</label>
      {!!errors && (
        <div>
          <AiOutlineWarning /> <p>{errors}</p>
        </div>
      )}
    </InputLg>
  );
};

export const GlobalInputPassword = ({
  label,
  registerName,
  register,
  type,
  defaultValue,
  errors,
}: InputProps) => {
  return (
    <InputLg error={errors}>
      <input
        type={type}
        {...register(registerName)}
        placeholder=" "
        defaultValue={defaultValue}
      />
      <label>{label}</label>
      {!!errors && (
        <div>
          <AiOutlineWarning /> <p>{errors}</p>
        </div>
      )}
    </InputLg>
  );
};

export const GlobalInputMask = ({
  label,
  registerName,
  control,
  mask,
  errors,
  defaultValue,
}: IInputMask) => {
  return (
    <InputLg error={errors}>
      <Controller
        control={control}
        name={registerName}
        render={({ field: { ref, onChange } }) => (
          <InputMask
            mask={mask}
            inputRef={ref}
            onChange={onChange}
            defaultValue={defaultValue}
            placeholder=" "
            alwaysShowMask={false}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore:next-line
            maskChar={null}
          />
        )}
      />
      <label>{label}</label>
      {!!errors && (
        <div>
          <AiOutlineWarning /> <p>{errors}</p>
        </div>
      )}
    </InputLg>
  );
};

interface IPropsButton {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  disabled?: any;
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
