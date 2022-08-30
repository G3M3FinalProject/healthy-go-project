import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


    const registerFormSchema = yup.object().shape({
    name: yup.string().required("Nome é um campo necessário"),
    email: yup.string().required("E-mail é um campo necessário").email("Precisa ser uum e-mail válido"),
    password: yup.string().required("Senha é um campo necessário").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Minimo de 8 caracteres, ao menos 1 (A-Z) letra maiúscula, 1 (a-z) minúscula , 1 (1-9) número e 1 (%-#-@) caracter especial"),
    confirmPassword: yup.string().required("A confirmação da senha é necessária").oneOf([yup.ref("password")], "As senhas não estão iguais")
});



export interface IFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
