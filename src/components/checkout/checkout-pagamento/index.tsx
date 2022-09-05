import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useRequestsUserContext } from "../../../contexts/requestsUserContext";
import { requestFormSchema } from "../../../validations";
import { GlobalInputLg } from "../../global-inputs";
import { DivCredCard, DivDateCard, DivForm } from "./style";

interface IUserPayament {
  payament: string;
  cvv: string;
  validityDate: string;
  titularName: string;
  cardNumber: number;
}

export function FormPgto() {
  const { postUserRequest } = useRequestsUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPayament>({
    resolver: yupResolver(requestFormSchema),
  });

  const Submit = (data: IUserPayament) => {
    const payamentObject = {
      payament: data.payament,
    };
    console.log(payamentObject);
    postUserRequest(payamentObject);
  };
  console.log(errors);
  return (
    <DivForm>
      <form id="payamentForm" onSubmit={handleSubmit(Submit)}>
        <h2>Forma de Pagamento</h2>
        <div>
          <label>
            <input
              id="credito"
              {...register("payament")}
              name="payament"
              type="radio"
              value="Cartão de crédito"
            />
            Cartão de Crédito
          </label>
          <label>
            <input
              id="debito"
              {...register("payament")}
              name="payament"
              type="radio"
              value="Cartão de débito"
            />
            Cartão de débito
          </label>
        </div>

        <DivCredCard>
          <div>
            <GlobalInputLg
              type="number"
              label="Número do Cartão"
              register={register}
              registerName="cardNumber"
            />
            <GlobalInputLg
              type="text"
              label="Nome do Títular"
              register={register}
              registerName="titularName"
            />
            <label>
              Parcelamento*
              <select name="select">
                <option value="A vista">À vista - Até 10% de Desconto</option>
                <option value="2 sem juros">2 x Sem Juros</option>
                <option value="3 sem juros">3 x Sem Juros</option>
                <option value="4 sem juros">4 x Sem Juros</option>
              </select>
            </label>
          </div>
          <DivDateCard>
            <GlobalInputLg
              type="text"
              label="Validade"
              register={register}
              registerName="validityDate"
            />
            <GlobalInputLg
              type="text"
              label="CVV"
              register={register}
              registerName="cvv"
            />
          </DivDateCard>
        </DivCredCard>
      </form>
    </DivForm>
  );
}
