import * as Yup from "yup";

export const signupValidation = Yup.object({
  firstName: Yup.string("Doit être une chaîne de caractère")
    .max(15, "Doit contenir 20 caractères ou moins")
    .required("Prénom est requis"),
  lastName: Yup.string("Doit être une chaîne de caractère")
    .max(20, "Doit contenir 30 caractères ou moins")
    .required("Nom est requis"),
  email: Yup.string("Doit être une chaîne de caractère")
    .email("E-mail invalide")
    .required("Email est requis"),
  phoneNumber: Yup.string()
    .required("Numéro de téléphone est requis")
    .matches(/^[0-9]+$/, "Seulement les chiffres")
    .min(10, "au moins 10 chiffres"),
  password: Yup.string()
    .min(5, "au moins 5 caractères")
    .required("Le mot de passe est requis"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Le mot de passe n'est pas confirmé"
  ),
  street: Yup.string().required("Email est requis"),
  postalCode: Yup.string()
    .required("Code Postal est requis")
    .matches(/^[0-9]+$/, "Seulement les chiffres")
    .min(5, "au moins 5 chiffres")
    .max(5, "maximum 5 chiffres"),
  city: Yup.string().required("Email est requis"),
});
