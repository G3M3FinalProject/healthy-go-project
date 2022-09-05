import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome é um campo necessário"),
  email: yup
    .string()
    .required("E-mail é um campo necessário")
    .email("Precisa ser uum e-mail válido"),
  password: yup.string().required("Senha é um campo necessário"),
  confirmPassword: yup
    .string()
    .required("A confirmação da senha é necessária")
    .oneOf([yup.ref("password")], "As senhas não estão iguais"),
});

export const editFormSchema = yup.object().shape({
  name: yup.string(),
  birthdate: yup.string().required("Data de nascimento é um campo necessário"),
  email: yup.string().required("E-mail é um campo necessário"),
});

export const registerAdressFormSchema = yup.object().shape({
  adressIdentification: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  postal: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  district: yup.string().required("Campo obrigatório"),
  number: yup.number().required("Campo obrigatório"),
  complement: yup.string(),
});

export const requestFormSchema = yup.object().shape({
  cvv: yup.number().required("Campo obrigatório"),
  validityDate: yup.string().required("Campo obrigatório"),
  titularName: yup.string().required("Campo obrigatório"),
  cardNumber: yup.number().required("Campo obrigatório"),
  payament: yup.string().required("Campo obrigatório"),
  address: yup.string().required("Campo obrigatório"),
});
