import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { ICompleteAddress } from "../../../contexts/addressContext";
import { useRequestsUserContext } from "../../../contexts/requestsUserContext";
import { requestFormSchema } from "../../../validations";
import { PayamentForm } from "./checkout-pagamento";
import { SelectAddressForm } from "./checkout-select-address";
import { Divform } from "./styles";

interface IUserPayament {
  payament: string;
  cvv: number | string;
  validityDate: string;
  titularName: string;
  cardNumber: number;
  address: ICompleteAddress;
}

const CheckoutForm = () => {
  const { postUserRequest } = useRequestsUserContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserPayament>({
    resolver: yupResolver(requestFormSchema),
  });

  const Submit = (data: IUserPayament) => {
    const payamentObject = {
      payament: data.payament,
    };
    postUserRequest(payamentObject);
  };

  return (
    <Divform id="payamentForm" onSubmit={handleSubmit(Submit)}>
      <SelectAddressForm register={register} errors={errors} />
      <PayamentForm register={register} errors={errors} control={control} />
    </Divform>
  );
};

export default CheckoutForm;
