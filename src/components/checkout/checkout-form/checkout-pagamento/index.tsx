import { Control, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";

import { GlobalInputLg, GlobalInputMask } from "../../../global-inputs";
import { ErrorMessage } from "../checkout-select-address/style";
import {
  DivCredCard,
  DivDateCard,
  DivForm,
  DivPayment,
  SelectPayment,
} from "./style";

interface IPayamentFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldErrorsImpl<{
    payament: string;
    cvv: string;
    validityDate: string;
    titularName: string;
    cardNumber: number;
    cpf: string;
    address: {
      adressIdentification: string;
      id: number;
      city: string;
      state: string;
      postal: string;
      street: string;
      district: string;
      number: number;
      complement: string;
    };
  }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}
export const PayamentForm = ({
  register,
  errors,
  control,
}: IPayamentFormProps) => {
  return (
    <DivForm>
      <h2>Forma de Pagamento</h2>
      <SelectPayment>
        <label>
          <input
            id="credito"
            {...register("payament")}
            name="payament"
            type="radio"
            value="Cartão de crédito"
          />
          <span>Cartão de Crédito</span>
        </label>
        <label>
          <input
            id="debito"
            {...register("payament")}
            name="payament"
            type="radio"
            value="Cartão de débito"
          />
          <span>Cartão de débito</span>
        </label>
        {errors?.payament?.message && (
          <ErrorMessage>
            <AiOutlineWarning />
            <p>{errors.payament.message}</p>
          </ErrorMessage>
        )}
      </SelectPayment>

      <DivCredCard>
        <DivPayment>
          <GlobalInputMask
            label="Número do Cartão"
            registerName="cardNumber"
            control={control}
            mask="9999 9999 9999 9999"
            errors={errors.cardNumber?.message}
          />
          <GlobalInputLg
            type="text"
            label="Nome do Títular"
            register={register}
            registerName="titularName"
            errors={errors.titularName?.message}
          />
          <GlobalInputMask
            label="CPF"
            registerName="cpf"
            control={control}
            mask="999.999.999-99"
            errors={errors.cardNumber?.message}
          />
          <label>
            <span>Parcelamento*</span>
            <select name="select">
              <option value="A vista">À vista - Até 10% de Desconto</option>
              <option value="2 sem juros">2 x Sem Juros</option>
              <option value="3 sem juros">3 x Sem Juros</option>
              <option value="4 sem juros">4 x Sem Juros</option>
            </select>
          </label>
        </DivPayment>

        <DivDateCard>
          <GlobalInputMask
            label="Validade"
            registerName="validityDate"
            control={control}
            mask="99/99"
            errors={errors.validityDate?.message}
          />
          <GlobalInputMask
            label="CVV"
            registerName="cvv"
            control={control}
            mask="9999"
            errors={errors.cvv?.message}
          />
        </DivDateCard>
      </DivCredCard>
    </DivForm>
  );
};
