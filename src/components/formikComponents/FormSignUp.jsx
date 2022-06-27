import { ErrorMessage, Field, Form, Formik } from "formik"
import { useCallback } from "react"
import InputForm from "./InputForm"
import * as Yup from "yup"
import { Button } from "@mui/material"
import api from "../api"

const FormSignUp = ({ userDetails }) => {
  const CommentSchema = Yup.object().shape({
    name: Yup.string().required(" Required").min(1, "Entrez votre Prénom"),
    lastName: Yup.string()
      .required("Requis")
      .min(1, "Entrez votre Nom de Famille"),
    age: Yup.number()
      .required("Requis")
      .positive("Valeur négative non autorisée")
      .integer(),
    email: Yup.string()
      .email("Email incorecte: example@example.com")
      .required("Requis"),
    street: Yup.string().required("Requis"),
    zipCode: Yup.number()
      .positive("Valeur négative non autorisée")
      .integer()
      .nullable(),
    city: Yup.string().nullable(),
    civility: Yup.string().required("Requis"),
    password: Yup.string()
      .required("S'il vous plait entrez votre mot de passe")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm,
        "Mot de passe doit contenir minimun 8 characteres, 1 majuscule et un charactere spéciale"
      ),
    confirm_password: Yup.string()
      .required("S'il vous plait entrez votre confirmation mot de passe")
      .oneOf([Yup.ref("password"), null], "Le mot de passe ne correspond pas"),
  })

  const handleFormSubmit = useCallback((value, { resetForm }) => {
    try {
      api
        .post("/api/auth/sign-up", {
          name: value.name,
          lastName: value.lastName,
          age: value.age,
          email: value.email,
          street: value.street,
          zipCode: user.zipCode,
          city: value.city,
          civility: value.civility,
          role: "user",
          password: value.password,
        })
        .then(() => {
          resetForm()
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      resetForm()
    }
  }, [])

  return (
    <div>
      <div className="mt-2 md:mt-0 md:col-span-2">
        <Formik
          validationSchema={CommentSchema}
          initialValues={{
            name: userDetails ? userDetails.name : "",
            lastName: userDetails ? userDetails.lastName : "",
            age: userDetails ? userDetails.age : "",
            email: userDetails ? userDetails.email : "",
            street: userDetails ? userDetails.street : "",
            zipCode: userDetails ? userDetails.zipCode : null,
            city: userDetails ? userDetails.city : "",
            civility: userDetails ? userDetails.civility : "",
            role: userDetails ? userDetails.role : "user",
            password: userDetails ? userDetails.password : "",
            confirm_password: "",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, isSubmitting, errors, touched, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-3 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Prénom"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Nom de famille
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Nom de famille"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="lastName"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Civilité
                      </label>
                      <Field type="radio" name="civility" value="M" />
                      <label className="mx-2 text-black">M</label>
                      <Field type="radio" name="civility" value="Mme" />
                      <label className="mx-2 text-black">Mme</label>
                      <Field type="radio" name="civility" value="Autre" />
                      <label className="mx-2 text-black">Autre</label>
                      <ErrorMessage
                        name="civility"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <Field
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="age"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Adresse
                      </label>
                      <Field
                        type="text"
                        name="street"
                        placeholder="Adresse"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="street"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <Field
                        type="text"
                        name="city"
                        placeholder="City"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />{" "}
                      <ErrorMessage
                        name="city"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <Field
                        type="text"
                        name="zipCode"
                        placeholder="zipCode"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="zipCode"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Mot de Passe
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mot de Passe"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    as={InputForm}
                    required
                  />
                  <ErrorMessage
                    name="password"
                    render={(msg) => (
                      <div className="text-red-500 text-sm">{msg}</div>
                    )}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirmation Mot de Passe
                  </label>
                  <Field
                    type="password"
                    name="confirm_password"
                    placeholder="Confirmation Mot de Passe"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    as={InputForm}
                    required
                  />
                  <ErrorMessage
                    name="confirm_password"
                    render={(msg) => (
                      <div className="text-red-500 text-sm">{msg}</div>
                    )}
                  />
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ mt: 2 }}
                    color="primary"
                    variant="contained"
                    fullWidth
                    className="bg-[#6667ab] w-full h-[20%] p-2"
                  >
                    Envoyer
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default FormSignUp
