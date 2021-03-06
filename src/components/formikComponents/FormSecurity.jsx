import { Button } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { useCallback, useContext } from "react"
import * as Yup from "yup"
import api from "../api"
import AppContext from "../AppContext"
import InputForm from "./InputForm"

const FormSecurity = ({ userId }) => {
  const CommentSchema = Yup.object().shape({
    prevpassword: Yup.string()
      .required("S'il vous plait entrez votre précedent mot de passe")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm,
        "Mot de passe doit contenir minimun 8 characteres, 1 majuscule et un charactere spéciale"
      ),
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
      // route to change password doesn't existe
      api
        .post("/user/" + userId + "/password/save", value)
        .then(() => {
          resetForm()
        })
        .catch((error) => {
          console.error(error)
          resetForm()
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
            prevpassword: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, isSubmitting, errors, touched, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Précedent Mot de Passe
                      </label>
                      <Field
                        type="password"
                        name="prevpassword"
                        placeholder="Précedent Mot de Passe"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="prevpassword"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
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
                  </div>
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

export default FormSecurity
