import * as Yup from "yup";

export const addNewProductValidationForm = Yup.object({
  name: Yup.string("Doit être une chaîne de caractère")
    .required("Nom du produit est requis"),
  weight: Yup.string("Doit être une chaîne de caractère").required(
    "Poids est requis"
  ),
  description: Yup.string("Doit être une chaîne de caractère")
    .max(400, "Doit contenir 400 caractères ou moins")
    .required("Description est requis"),
  ingredients: Yup.string("Doit être une chaîne de caractère").required(
    "Ingrédients est requis"
  ),
  price: Yup.string("Doit être une chaîne de caractère").required(
    "Prénom est requis"
  ),
})