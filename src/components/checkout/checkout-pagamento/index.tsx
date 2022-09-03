import { useForm } from "react-hook-form";

import { GlobalInputLg } from "../../global-inputs";
import { DivCredCard, DivDateCard, DivForm } from "./style";

export function FormPgto() {
  const {
    register,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <DivForm>
      <form>
        <h2>Forma de Pagamento</h2>
        <div>
          <label>
            Cartão de Crédito
            <input id="credito" name="base" type="radio" value="S" />
          </label>
          <label>
            Cartão de débito
            <input id="debito" name="base" type="radio" value="S" />
          </label>
          <label>
            Pix
            <input id="pix" name="base" type="radio" value="S" />
          </label>
        </div>
        <DivCredCard>
          <div>
            <GlobalInputLg
              type="text"
              label="Número do Cartão"
              register={register}
              registerName="cartaonumero"
            />
            <GlobalInputLg
              type="text"
              label="Nome do Títular"
              register={register}
              registerName="nomeTitular"
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
              registerName="validade"
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
